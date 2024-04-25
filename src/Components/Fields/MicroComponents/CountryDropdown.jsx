import React, { useState, useEffect } from "react";
import { Options } from "../../../Utils/helper";

function CountryDropdown(props) {
  //props
  const {
    isSource,
    fetchSearchStatus,
    selectedSourceCurrency,
    selectedDestinationCurrency,
  } = props;

  //useState-hooks
  const [selectedSourceObj, setSelectedSourceObj] = useState([
    Options[1].options[2],
  ]);
  const [selectedDestinationObj, setSelectedDestinationObj] = useState([
    Options[1].options[3],
  ]);

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

  const emojiSrc = isSource
    ? selectedSourceObj[0]["emoji"]
    : selectedDestinationObj[0]["emoji"];
  const countryLabel = isSource
    ? selectedSourceObj[0]["label"]
    : selectedDestinationObj[0]["label"];

  return (
    <div className="selected-sources" onClick={() => fetchSearchStatus(true)}>
      <img src={emojiSrc} alt="EUR" height="24" width="24" />
      <label>{countryLabel}</label>
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
  );
}

export default CountryDropdown;
