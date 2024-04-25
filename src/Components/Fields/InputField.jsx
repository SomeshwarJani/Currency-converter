import React, { useEffect, useState } from "react";

//css
import "../Calculators/calculator.css";

// components
import SearchableDropdown from "../../Shared/SearchableDropdowns/SearchableDropdown";

//helper
import { Options } from "../../Utils/helper";

export default function InputField(props) {
  //props
  const {
    isSource,
    onChange,
    value,
    selectedSourceCurrency,
    selectedDestinationCurrency,
  } = props;

  //Usestate-hooks
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedSourceObj, setSelectedSourceObj] = useState([
    Options[1].options[2],
  ]);
  const [selectedDestinationObj, setSelectedDestinationObj] = useState([
    Options[1].options[3],
  ]);

  const handleWheelEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  useEffect(() => {
    const input = document.getElementById("tw-calculator-source");
    input?.addEventListener("wheel", handleWheelEvent);
    return () => input.removeEventListener("wheel", handleWheelEvent);
  }, []);

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
    fetchSelectedObj(selectedSourceCurrency, selectedDestinationCurrency);
  }, [selectedSourceCurrency, selectedDestinationCurrency]);

  const onInputChange = (event) => {
    onChange(Number(event?.target?.value));
  };

  return (
    <div className="source-container">
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
          isSearchOpen={isSearchOpen}
          isSource={isSource}
          isModalOpen={isModalOpen}
          sourceSelectedCurrency={selectedSourceCurrency}
          destinationSelectedCurrency={selectedDestinationCurrency}
        />
      )}
    </div>
  );
}
