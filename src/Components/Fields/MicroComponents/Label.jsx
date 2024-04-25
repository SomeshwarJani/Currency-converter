import React from "react";

function Label(props) {
  const { isSource } = props;
  const labelValue = isSource ? "You send exactly" : "Recipient gets";
  return (
    <>
      <label htmlFor="tw-calculator-source" className="source-label">
        {labelValue}
      </label>
    </>
  );
}

export default Label;
