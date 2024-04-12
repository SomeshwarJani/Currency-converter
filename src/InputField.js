import React, { useDeferredValue, useEffect, useState } from "react";
import "./calculator.css";
import { Options } from "./Utils/helper";
import SearchableDropdown from "./Shared/SearchableDropdown";
import axios from "axios";

export default function InputField(props) {
  const { isSource, onChange, value, getRate, getSelectedCurrency } = props;

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sourceSelectedCurrency, setSourceSelectedCurrency] = useState("INR");
  const [destinationSelectedCurrency, setDestinationSelectedCurrency] =
    useState("USD");
  const [selectedSourceObj, setSelectedSourceObj] = useState([
    {
      key: "india",
      label: "INR",
      value: "INR",
      emoji: "https://wise.com/web-art/assets/flags/inr.svg",
      desc: "Indian rupee",
    },
  ]);
  const [selectedDestinationObj, setSelectedDestinationObj] = useState([
    {
      key: "USD",
      label: "USD",
      value: "USD",
      emoji: "https://wise.com/web-art/assets/flags/usd.svg",
      desc: "United States dollar",
    },
  ]);

  const [info, setInfo] = useState([]);
  const [sourceInput, setSourceInput] = useState(0);
  const sourceInputData = useDeferredValue(sourceInput);

  useEffect(() => {
    const getDataFromLs = JSON.parse(localStorage.getItem("selectedCountries"));
    const selectedCountryInLowerCase = getDataFromLs.source.toLowerCase();
    setDestinationSelectedCurrency(getDataFromLs?.destination);
    setSourceSelectedCurrency(getDataFromLs.source);
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${selectedCountryInLowerCase}.json`
      )
      .then((res) => {
        setInfo(res.data[selectedCountryInLowerCase]);
      });
  }, [sourceSelectedCurrency, destinationSelectedCurrency]);

  useEffect(() => {
    convert();
  }, [info]);

  const convert = () => {
    let rate = info[destinationSelectedCurrency.toLowerCase()];
    onChange(Number(sourceInputData), Number(sourceInputData) * Number(rate));
    getRate(Number(rate));
  };

  useEffect(() => {
    let selectedCountries = {
      source: sourceSelectedCurrency,
      destination: destinationSelectedCurrency,
    };
    localStorage.setItem(
      "selectedCountries",
      JSON.stringify(selectedCountries)
    );
    const input = document.getElementById("tw-calculator-source");

    const wheelEventOninput = input?.addEventListener(
      "wheel",
      function (event) {
        event.stopPropagation();
        event.preventDefault();
      }
    );
    return () => input.removeEventListener("wheel", wheelEventOninput);
  }, []);

  const getSelectedValue = (value) => {
    let selectedCountries = { source: "", destination: "" };
    let getLsData = JSON.parse(localStorage.getItem("selectedCountries"));
    if (getLsData?.source && getLsData?.destination) {
      selectedCountries = JSON.parse(localStorage.getItem("selectedCountries"));
    }

    if (isSource) {
      setSourceSelectedCurrency(value);
      selectedCountries.source = value;
    } else {
      setDestinationSelectedCurrency(value);
      selectedCountries.destination = value;
    }
    localStorage.setItem(
      "selectedCountries",
      JSON.stringify(selectedCountries)
    );
  };
  const isModalOpen = (value) => {
    setIsSearchOpen(value);
  };

  const fetchSelectedObj = (sourceValue, destinationValue) => {
    if (isSource) {
      let sourceObj = Options[1].options.filter(
        (opt) => opt.label === sourceValue
      );
      setSelectedSourceObj(sourceObj);
    } else {
      let destinationObj = Options[1].options.filter(
        (opt) => opt.label === destinationValue
      );
      setSelectedDestinationObj(destinationObj);
    }
  };

  useEffect(() => {
    fetchSelectedObj(sourceSelectedCurrency, destinationSelectedCurrency);
    getSelectedCurrency(sourceSelectedCurrency, destinationSelectedCurrency);
  }, [sourceSelectedCurrency, destinationSelectedCurrency]);

  const onInputChange = (event) => {
    setSourceInput(Number(event?.target?.value));
    const getDataFromLs = JSON.parse(localStorage.getItem("selectedCountries"));
    const destinationCurrency = getDataFromLs.destination.toLowerCase();
    let rate = info[destinationCurrency.toLowerCase()];
    onChange(
      Number(event?.target?.value),
      Number(sourceInputData) * Number(rate)
    );
    getRate(Number(rate));
    return Number(sourceInputData);
  };

  return (
    <div data-testid="source-amount" className="source-container">
      <label htmlFor="tw-calculator-source" className="source-label">
        {isSource ? "You send exactly" : "Recipient gets"}
      </label>
      <div className="input-group-source">
        <input
          key={isSource ? "source" : "destination"}
          type="number"
          id="tw-calculator-source"
          className={`tw-calculator-source ${
            !isSource ? "input-group-destination" : ""
          }`}
          onChange={(event) => onInputChange(event)}
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
          value={Number(value)}
        />
        <div
          className="selected-sources"
          role="button"
          onClick={() => setIsSearchOpen(true)}
        >
          <img
            src={
              isSource
                ? selectedSourceObj?.[0]?.["emoji"]
                : selectedDestinationObj?.[0]?.["emoji"]
            }
            alt="EUR"
            height="24"
            width="24"
          />
          <label>
            {isSource
              ? selectedSourceObj?.[0]?.["label"]
              : selectedDestinationObj?.[0]?.["label"]}
          </label>
          <svg
            width="16"
            height="16"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M20.143 6.857 12.17 14.83 4.2 6.857 3 8.057l8.571 8.572a.846.846 0 0 0 .6.257.846.846 0 0 0 .6-.257l8.572-8.572-1.2-1.2Z"></path>
          </svg>
        </div>
      </div>
      {isSearchOpen && (
        <SearchableDropdown
          getSelectedValue={getSelectedValue}
          isSearchOpen={isSearchOpen}
          isSource={isSource}
          isModalOpen={isModalOpen}
          sourceSelectedCurrency={sourceSelectedCurrency}
          destinationSelectedCurrency={destinationSelectedCurrency}
        />
      )}
    </div>
  );
}
