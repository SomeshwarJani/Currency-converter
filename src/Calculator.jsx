import React, { useEffect, useState } from "react";
import "./calculator.css";
import InputField from "./InputField";
import ListItems from "./ListItems";

export default function Calculator() {
  const [sourceInput, setSourceInput] = useState(0);
  const [destinationInput, setDestinationInput] = useState(0);
  const [selectedSourceCurrency, setSelectedSourceCurrency] = useState("");
  const [selectedDestinationCurrency, setSelectedDestinationCurrency] =
    useState("");

  const [rate, setRate] = useState(0);

  const onChange = (valueSource, valueDestination) => {
    setSourceInput(valueSource);
    setDestinationInput(valueDestination);
  };

  useEffect(() => {
    let getSelectedValuesFromLs = JSON.parse(
      localStorage.getItem("selectedCountries")
    );
    setSelectedSourceCurrency(getSelectedValuesFromLs?.source);
    setSelectedDestinationCurrency(getSelectedValuesFromLs?.destination);
  }, []);

  const getSelectedCurrency = (source, destination) => {
    let getSelectedValuesFromLs = JSON.parse(
      localStorage.getItem("selectedCountries")
    );
    setSelectedSourceCurrency(getSelectedValuesFromLs?.source);
    setSelectedDestinationCurrency(getSelectedValuesFromLs?.destination);
  };

  const getRate = (value) => {
    setRate(value);
  };

  const getDestinationValue = (value) => {
    setDestinationInput(value);
  };

  return (
    <div className="calculator-container">
      <InputField
        isSource={true}
        onChange={onChange}
        value={sourceInput}
        getRate={getRate}
        getSelectedCurrency={getSelectedCurrency}
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
        onChange={onChange}
        value={destinationInput}
        getRate={getRate}
        getSelectedCurrency={getSelectedCurrency}
      />
      <p className="mw-body-3 m-b-0">
        Should arrive <span className="mw-body-3-bold">by Monday</span>
      </p>
      <div className="CalculatorExtraInformation_calculatorActions__vXNoW m-t-3">
        <a
          className="btn btn-md np-btn np-btn-md btn-accent btn-priority-1 btn-block"
          target="blank"
          href="https://wise.com/register?redirectUrl=%2Fsend%23%3Famount%3D115249%26sourceCurrency%3DINR%26targetCurrency%3DUSD%26fixedTarget%3Dfalse%26guaranteedFixedTarget%3Dfalse%26paymentOptionType%3DREGULAR&country=IN"
        >
          Get started
        </a>
      </div>
    </div>
  );
}
