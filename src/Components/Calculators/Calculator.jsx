import React, { useEffect, useMemo, useState } from "react";

//components
import InputField from "../Fields/InputField";
import ListItems from "../ItemListing/ListItems";
import ArrivedInfo from "../ArrivedInfo";
//css
import "./calculator.css";
//utils
import { getDataFromLs } from "../../Utils/helper";
import { UseCurrencyInfo } from "../../Utils/CustomHooks/UseCurrencyInfo";
import { type } from "@testing-library/user-event/dist/type";

const convert = (currencyInfo, selectedDestinationCurrency) => {
  let rate = currencyInfo[selectedDestinationCurrency.toLowerCase()];
  return Number(rate);
};

export default function Calculator() {
  //useState-hooks
  const [sourceInput, setSourceInput] = useState(0);
  const [destinationInput, setDestinationInput] = useState(0);
  const [selectedSourceCurrency, setSelectedSourceCurrency] = useState("INR");
  const [selectedDestinationCurrency, setSelectedDestinationCurrency] =
    useState("USD");
  const [rate, setRate] = useState(0);

  //Custom-hooks
  const { currencyInfo } = UseCurrencyInfo();

  //UseMemo-hooks
  useMemo(() => {
    let CURRENTRATE = 0;
    if (Object.keys(currencyInfo).length) {
      CURRENTRATE = convert(currencyInfo, selectedDestinationCurrency);
    }
    setRate(CURRENTRATE);
  }, [currencyInfo, selectedDestinationCurrency]);

  const onInputChange = (valueSource) => {
    const calculateDestinationInput = valueSource * rate;
    setSourceInput(valueSource);
    setDestinationInput(calculateDestinationInput);
  };

  const getDestinationValue = (value) => {
    setDestinationInput(value);
  };

  const setLsDataToState = () => {
    let { source, destination } = getDataFromLs();
    setSelectedSourceCurrency(source);
    setSelectedDestinationCurrency(destination);
  };

  useEffect(() => {
    setLsDataToState();
  }, []);

  useEffect(() => {
    let lsUpdated = window.addEventListener("storage", () => {
      setLsDataToState();
    });
    return () => window.removeEventListener("storage", lsUpdated);
  });

  return (
    <div className="calculator-container">
      <InputField
        isSource={true}
        onChange={onInputChange}
        value={sourceInput}
        selectedSourceCurrency={selectedSourceCurrency}
        currencyInfo={currencyInfo}
      />
      <ListItems
        selectedSourceCurrency={selectedSourceCurrency}
        sourceInput={sourceInput}
        destinationInput={destinationInput}
        rate={rate}
        getDestinationValue={getDestinationValue}
      />
      <InputField
        isSource={false}
        onChange={onInputChange}
        value={destinationInput}
        selectedDestinationCurrency={selectedDestinationCurrency}
        currencyInfo={currencyInfo}
      />
      <ArrivedInfo />
    </div>
  );
}
