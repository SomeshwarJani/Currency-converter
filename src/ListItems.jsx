import React, { useEffect, useState } from "react";
import ChargesModal from "./Shared/ChargesModal";
import "./Listitems.css";
import { chargesOption } from "./Utils/helper";

function ListItems(props) {
  const {
    selectedSourceCurrency,
    sourceInput,
    destinationInput,
    rate,
    getDestinationValue,
  } = props;
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const getListOpenStatus = (value) => {
    setIsListOpen(value);
  };
  const getSelectedItem = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const ITEM =
      selectedSourceCurrency &&
      chargesOption[0].options[selectedSourceCurrency][0];
    setSelectedItem(ITEM);
  }, [selectedSourceCurrency]);

  const setChargeLabel = () => {
    let cal = (sourceInput / 100) * selectedItem.percentageOfCharge;
    return `${cal.toFixed(2)} ${selectedSourceCurrency}`;
  };

  const charges = {
    transferFee: () =>
      selectedItem.percentageOfCharge
        ? (sourceInput / 100) * selectedItem.percentageOfCharge
        : 0,
    ourFee: () => (sourceInput / 100) * 2,
  };
  const TOTAL_FEE = (charges.transferFee() + charges.ourFee()).toFixed(2);
  const ELIGIBLE_FOR_CONVERT_AMOUNT = sourceInput - TOTAL_FEE;
  const FINAL_AMOUNT = ELIGIBLE_FOR_CONVERT_AMOUNT * rate;

  useEffect(() => {
    getDestinationValue(FINAL_AMOUNT);
  });
  return (
    <div>
      {selectedSourceCurrency &&
        chargesOption[0].options[selectedSourceCurrency].length > 1 && (
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
        <li data-testid="tw-calculator-breakdown-item">
          <span className="tw-calculator-breakdown__icon"></span>
          <div className="tw-calculator-breakdown__content">
            <span className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value">
              {selectedItem.percentageOfCharge
                ? setChargeLabel()
                : `0 ${selectedSourceCurrency}`}
            </span>
            <span className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label">
              <span data-tracking-id="calculator-payment-select">
                <button
                  className="btn-unstyled tw-calculator-payment-option-select"
                  aria-expanded="false"
                  type="button"
                  onClick={() => setIsListOpen(true)}
                >
                  <div className="np-select-input-option-content-container">
                    <div className="np-select-input-option-content-text">
                      <div className="np-select-input-option-content-text-line-1 np-select-input-option-content-text-within-trigger">
                        <h4 className="np-select-input-option-content-text-primary d-inline">
                          {`${selectedItem?.label ?? "Bank transfer"} fee`}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <span
                    className="tw-icon tw-icon-chevron-down "
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.143 6.857 12.17 14.83 4.2 6.857 3 8.057l8.571 8.572a.846.846 0 0 0 .6.257.846.846 0 0 0 .6-.257l8.572-8.572-1.2-1.2Z"></path>
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </div>
        </li>
        <li
          data-testid="tw-calculator-breakdown-item"
          data-floating-ui-inert=""
        >
          <span className="tw-calculator-breakdown__icon"></span>
          <div className="tw-calculator-breakdown__content">
            <span
              className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value"
              data-testid="breakdown-item-left"
            >
              {`${charges.ourFee()} ${selectedSourceCurrency}`}
            </span>
            <span
              className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label"
              data-testid="breakdown-item-right"
            >
              Our fee
            </span>
          </div>
        </li>
        <li
          data-testid="tw-calculator-breakdown-item"
          data-floating-ui-inert=""
        >
          <span className="tw-calculator-breakdown__icon">
            <span>
              <span>–</span>
            </span>
          </span>
          <div className="tw-calculator-breakdown__content">
            <span
              className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value"
              data-testid="breakdown-item-left"
            >
              {`${TOTAL_FEE} ${selectedSourceCurrency}`}
            </span>
            <span
              className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label"
              data-testid="breakdown-item-right"
            >
              Total fees
            </span>
          </div>
        </li>
        <li aria-hidden="true" data-floating-ui-inert="">
          <hr className="m-t-1 m-b-0" />
        </li>
        <li
          data-testid="tw-calculator-breakdown-item"
          data-floating-ui-inert=""
        >
          <span className="tw-calculator-breakdown__icon">
            <span>
              <span>=</span>
            </span>
          </span>
          <div className="tw-calculator-breakdown__content">
            <span
              className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value"
              data-testid="breakdown-item-left"
            >
              {`${ELIGIBLE_FOR_CONVERT_AMOUNT} ${selectedSourceCurrency}`}
            </span>
            <span
              className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label"
              data-testid="breakdown-item-right"
            >
              Total amount we’ll convert
            </span>
          </div>
        </li>
        <li data-testid="tw-calculator-breakdown-item">
          <span
            className="tw-calculator-breakdown__icon"
            data-floating-ui-inert=""
          >
            <span>
              <span>×</span>
            </span>
          </span>
          <div className="tw-calculator-breakdown__content">
            <span
              className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value"
              data-testid="breakdown-item-left"
              data-floating-ui-inert=""
            >
              <a
                role="button"
                aria-label="Exchange rate"
                className="btn-unstyled"
                tabIndex="0"
              >
                <span className="tw-calculator-breakdown-rate__value">
                  {rate}
                </span>
              </a>
            </span>
            <span
              className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label"
              data-testid="breakdown-item-right"
            >
              <span className="np-popover">
                <span className="d-inline-block">
                  <button
                    className="btn btn-md np-btn np-btn-md btn-accent btn-priority-3 btn-unstyled tw-calculator-btn-unstyled p-a-0"
                    type="button"
                    aria-live="off"
                    style={{ height: "auto", verticalAlign: "bottom" }}
                    disabled
                  >
                    <span data-tracking-id="calculator-fixed-rate-disabled-tooltip">
                      Guaranteed rate ({`${(Math.random(2) * 100).toFixed(0)}h`}
                      )
                    </span>
                  </button>
                </span>
              </span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default ListItems;
