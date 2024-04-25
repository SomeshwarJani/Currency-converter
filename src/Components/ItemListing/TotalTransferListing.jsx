import React from "react";

function TotalTransferListing(props) {
  const { ELIGIBLE_FOR_CONVERT_AMOUNT, selectedSourceCurrency, rate } = props;
  return (
    <>
      {" "}
      <li>
        <span className="tw-calculator-breakdown__icon">
          <span>=</span>
        </span>
        <div className="tw-calculator-breakdown__content">
          <span className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value">
            {`${ELIGIBLE_FOR_CONVERT_AMOUNT} ${selectedSourceCurrency}`}
          </span>
          <span className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label">
            Total amount we’ll convert
          </span>
        </div>
      </li>
      <li>
        <span className="tw-calculator-breakdown__icon">
          <span>×</span>
        </span>
        <div className="tw-calculator-breakdown__content">
          <span className="tw-calculator-breakdown-item__left tw-calculator-breakdown-item__value">
            <span className="btn-unstyled">
              <span className="tw-calculator-breakdown-rate__value">
                {rate}
              </span>
            </span>
          </span>
          <span className="tw-calculator-breakdown-item__right tw-calculator-breakdown-item__label">
            <span>
              <span>
                <button
                  className="btn btn-md np-btn np-btn-md btn-accent btn-priority-3 btn-unstyled tw-calculator-btn-unstyled p-a-0"
                  style={{ height: "auto", verticalAlign: "bottom" }}
                  disabled
                >
                  <span>
                    Guaranteed rate ({`${(Math.random(2) * 100).toFixed(0)}h`})
                  </span>
                </button>
              </span>
            </span>
          </span>
        </div>
      </li>
    </>
  );
}
export default TotalTransferListing;
