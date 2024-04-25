import React from "react";

function ArrivedInfo() {
  return (
    <div>
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

export default ArrivedInfo;
