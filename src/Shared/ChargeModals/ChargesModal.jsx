import React from "react";
import { Modal } from "antd";
import "./ChargesModal.css";
import { chargesOption } from "../../Utils/helper";

function ChargesModal(props) {
  const {
    isListOpen,
    getListOpenStatus,
    getSelectedItem,
    selectedSourceCurrency,
    sourceInput,
  } = props;

  const onItemSelect = (event, index) => {
    const ITEM = chargesOption[0].options[selectedSourceCurrency][index];
    getSelectedItem(ITEM);
  };

  const calculateCharge = (option) => {
    const CALC = (sourceInput / 100) * option.percentageOfCharge;
    return `- ${CALC.toFixed(2)} ${selectedSourceCurrency} fee`;
  };

  return (
    <Modal
      open={isListOpen}
      footer={null}
      closeIcon={null}
      style={{
        top: "7.5rem",
        left: "25rem",
      }}
      maskClosable={true}
      onCancel={() => {
        getListOpenStatus(false);
      }}
    >
      {chargesOption.map((option) => (
        <header
          className="np-select-input-group-item-header np-text-title-group"
          key={Math.random(10)}
        >
          {option?.label}
        </header>
      ))}
      {chargesOption[0].options[selectedSourceCurrency].map((option, index) => (
        <div
          className="np-select-input-option"
          key={Math.random(10)}
          onClick={(e) => {
            onItemSelect(e, index);
            getListOpenStatus(false);
          }}
        >
          <h4 className="np-select-input-option-content-text-primary">
            {option?.label}
          </h4>
          <span className="np-select-input-option-content-text-secondary">
            {option.percentageOfCharge ? calculateCharge(option) : option?.desc}
          </span>
        </div>
      ))}
    </Modal>
  );
}

export default ChargesModal;
