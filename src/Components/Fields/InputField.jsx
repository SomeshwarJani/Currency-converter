import React, { useEffect, useState } from "react";

//css
import "../Calculators/calculator.css";
// components
import SearchableDropdown from "../../Shared/SearchableDropdowns/SearchableDropdown";
//helper
import Label from "./MicroComponents/Label";
import CountryDropdown from "./MicroComponents/CountryDropdown";

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

  const handleWheelEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  useEffect(() => {
    const input = document.getElementById("tw-calculator-source");
    input?.addEventListener("wheel", handleWheelEvent);
    return () => input.removeEventListener("wheel", handleWheelEvent);
  }, []);

  const isModalOpen = (openStatus) => {
    setIsSearchOpen(openStatus);
  };

  const onInputChange = (event) => {
    onChange(Number(event?.target?.value));
  };

  const key = isSource ? "source" : "destination";
  const addClass = !isSource ? "input-group-destination" : "";
  console.log({ value });
  return (
    <div className="source-container">
      <Label isSource={isSource} />
      <div className="input-group-source">
        <input
          key={key}
          type="number"
          id="tw-calculator-source"
          className={`tw-calculator-source ${addClass}`}
          onChange={(event) => onInputChange(event)}
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
          value={value !== 0 ? value : 0}
        />
        <CountryDropdown
          isSource={isSource}
          fetchSearchStatus={(value) => setIsSearchOpen(value)}
          selectedSourceCurrency={selectedSourceCurrency}
          selectedDestinationCurrency={selectedDestinationCurrency}
        />
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
