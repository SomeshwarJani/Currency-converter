import React from "react";

function ChargesListing(props) {
  const {
    isModalExpandable,
    sourceInput,
    selectedItem,
    selectedSourceCurrency,
    charges,
    listOpenStatus,
    TOTAL_FEE,
  } = props;

  const setChargeLabel = () => {
    let cal = (sourceInput / 100) * selectedItem.percentageOfCharge;
    return `${cal.toFixed(2)} ${selectedSourceCurrency}`;
  };

  const addExpandableClass = !isModalExpandable
    ? "btn-unstyled inactive"
    : "btn-unstyled";
  const chargesLabel = selectedItem.percentageOfCharge
    ? setChargeLabel()
    : `0 ${selectedSourceCurrency}`;
  const selectedChargeLabel = `${selectedItem?.label ?? "Bank transfer"} fee`;

  return (
    <>
      <li>
        <span className="tw-calculator-breakdown__icon"></span>
        <div className="tw-calculator-breakdown__content">
          <span className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value">
            {chargesLabel}
          </span>
          <span className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label">
            <span>
              <button
                className={addExpandableClass}
                onClick={() => listOpenStatus(true)}
              >
                <div className="charges_label">
                  <h4 className="d-inline">{selectedChargeLabel}</h4>
                </div>
                <span className="tw-icon tw-icon-chevron-down">
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
      <li>
        <span className="tw-calculator-breakdown__icon"></span>
        <div className="tw-calculator-breakdown__content">
          <span className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value">
            {`${charges.ourFee()} ${selectedSourceCurrency}`}
          </span>
          <span className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label">
            Our fee
          </span>
        </div>
      </li>
      <li>
        <span className="tw-calculator-breakdown__icon">
          <span>–</span>
        </span>
        <div className="tw-calculator-breakdown__content">
          <span className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value">
            {`${TOTAL_FEE} ${selectedSourceCurrency}`}
          </span>
          <span className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label">
            Total fees
          </span>
        </div>
      </li>
    </>
  );
}
export default ChargesListing;
