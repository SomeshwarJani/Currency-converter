import React, { useEffect, useState } from "react";
//components
import ChargesModal from "../../Shared/ChargeModals/ChargesModal";
//csss
import "./Listitems.css";
//utils
import { chargesOption } from "../../Utils/helper";
import ChargesListing from "./ChargesListing";
import TotalTransferListing from "./TotalTransferListing";

function ListItems(props) {
  //props
  const {
    selectedSourceCurrency,
    sourceInput,
    destinationInput,
    rate,
    getDestinationValue,
  } = props;
  //useState-hooks
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const getListOpenStatus = (value) => {
    setIsListOpen(value);
  };
  const getSelectedItem = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const ITEM = chargesOption[0].options[selectedSourceCurrency][0];
    setSelectedItem(ITEM);
  }, [selectedSourceCurrency]);

  const calculateCharges = () => {
    const charges = {
      transferFee: () =>
        selectedItem.percentageOfCharge
          ? (sourceInput / 100) * selectedItem.percentageOfCharge
          : 0,
      ourFee: () => (sourceInput / 100) * 2,
    };
    const TOTAL_FEE = Number(
      (charges.transferFee() + charges.ourFee()).toFixed(2)
    );
    const ELIGIBLE_FOR_CONVERT_AMOUNT = sourceInput - TOTAL_FEE;
    const FINAL_AMOUNT = ELIGIBLE_FOR_CONVERT_AMOUNT * rate;
    return { FINAL_AMOUNT, charges, ELIGIBLE_FOR_CONVERT_AMOUNT, TOTAL_FEE };
  };

  const { FINAL_AMOUNT, charges, ELIGIBLE_FOR_CONVERT_AMOUNT, TOTAL_FEE } =
    calculateCharges();
  const isModalExpandable =
    chargesOption[0].options[selectedSourceCurrency].length > 1;

  useEffect(() => {
    getDestinationValue(Number(FINAL_AMOUNT));
  });

  return (
    <div>
      {isModalExpandable && (
        <ChargesModal
          isListOpen={isListOpen}
          getListOpenStatus={getListOpenStatus}
          getSelectedItem={getSelectedItem}
          selectedSourceCurrency={selectedSourceCurrency}
          sourceInput={sourceInput}
          destinationInput={destinationInput}
        />
      )}

      <ul className="tw-calculator-breakdown">
        <ChargesListing
          isModalExpandable={isModalExpandable}
          sourceInput={sourceInput}
          selectedItem={selectedItem}
          selectedSourceCurrency={selectedSourceCurrency}
          charges={charges}
          listOpenStatus={(value) => setIsListOpen(value)}
          TOTAL_FEE={TOTAL_FEE}
        />
        <li>
          <hr className="m-t-1 m-b-0" />
        </li>
        <TotalTransferListing
          selectedSourceCurrency={selectedSourceCurrency}
          ELIGIBLE_FOR_CONVERT_AMOUNT={ELIGIBLE_FOR_CONVERT_AMOUNT}
          rate={rate}
        />
      </ul>
    </div>
  );
}
export default ListItems;
