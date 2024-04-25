const headerStyle = {
  position: "sticky",
  color: "#454745",
  fontWeight: "500",
  top: 0,
};

export const Options = [
  {
    label: <header style={headerStyle}>Popular currencies</header>,
    title: "Popular currencies",
    options: [
      {
        key: "euro1",
        label: "EUR",
        value: "EUR",
        emoji: "https://wise.com/web-art/assets/flags/eur.svg",
        desc: "Euro",
      },
      {
        key: "British",
        label: "GBP",
        value: "GBP",
        emoji: "https://wise.com/web-art/assets/flags/gbp.svg",
        desc: "British pound",
      },
      {
        key: "Bharat",
        label: "INR",
        value: "INR",
        emoji: "https://wise.com/web-art/assets/flags/inr.svg",
        desc: "Indian rupee",
      },
      {
        key: "United States",
        label: "USD",
        value: "USD",
        emoji: "https://wise.com/web-art/assets/flags/usd.svg",
        desc: "United States dollar",
      },
    ],
  },
  {
    label: <header style={headerStyle}>All currencies</header>,
    title: "All currencies",
    options: [
      {
        label: "AED",
        value: "AED",
        emoji: "https://wise.com/web-art/assets/flags/aed.svg",
        desc: "United Arab Emirates dirham",
      },
      {
        label: "AUD",
        value: "AUD",
        emoji: "https://wise.com/web-art/assets/flags/aud.svg",
        desc: "Australian dollar",
      },
      {
        label: "BGN",
        value: "BGN",
        emoji: "https://wise.com/web-art/assets/flags/bgn.svg",
        desc: "Bulgarian lev",
      },
      {
        label: "BRL",
        value: "BRL",
        emoji: "https://wise.com/web-art/assets/flags/brl.svg",
        desc: "Brazilian real",
      },
      {
        label: "CAD",
        value: "CAD",
        emoji: "https://wise.com/web-art/assets/flags/cad.svg",
        desc: "Canadian dollar",
      },
      {
        label: "CHF",
        value: "CHF",
        emoji: "https://wise.com/web-art/assets/flags/chf.svg",
        desc: "Swiss franc",
      },
      {
        label: "CNY",
        value: "CNY",
        emoji: "https://wise.com/web-art/assets/flags/cny.svg",
        desc: "Chinese yuan",
      },
      {
        label: "CZK",
        value: "CZK",
        emoji: "https://wise.com/web-art/assets/flags/czk.svg",
        desc: "Czech koruna",
      },
      {
        key: "euro2",
        label: "EUR",
        value: "EUR",
        emoji: "https://wise.com/web-art/assets/flags/eur.svg",
        desc: "Euro",
      },
      {
        key: "pound",
        label: "GBP",
        value: "GBP",
        emoji: "https://wise.com/web-art/assets/flags/gbp.svg",
        desc: "British pound",
      },
      {
        label: "HKD",
        value: "HKD",
        emoji: "https://wise.com/web-art/assets/flags/hkd.svg",
        desc: "Hong Kong dollar",
      },
      {
        label: "HUF",
        value: "HUF",
        emoji: "https://wise.com/web-art/assets/flags/huf.svg",
        desc: "Hungarian forint",
      },
      {
        label: "IDR",
        value: "IDR",
        emoji: "https://wise.com/web-art/assets/flags/idr.svg",
        desc: "Indonesian rupiah",
      },
      {
        label: "ILS",
        value: "ILS",
        emoji: "https://wise.com/web-art/assets/flags/ils.svg",
        desc: "Israeli shekel",
      },
      {
        key: "india",
        label: "INR",
        value: "INR",
        emoji: "https://wise.com/web-art/assets/flags/inr.svg",
        desc: "Indian rupee",
      },
      {
        label: "JPY",
        value: "JPY",
        emoji: "https://wise.com/web-art/assets/flags/jpy.svg",
        desc: "Japanese yen",
      },
      {
        label: "MYR",
        value: "MYR",
        emoji: "https://wise.com/web-art/assets/flags/myr.svg",
        desc: "Malaysian ringgit",
      },
      {
        label: "NOK",
        value: "NOK",
        emoji: "https://wise.com/web-art/assets/flags/nok.svg",
        desc: "Norwegian krone",
      },
      {
        label: "NZD",
        value: "NZD",
        emoji: "https://wise.com/web-art/assets/flags/nzd.svg",
        desc: "New Zealand dollar",
      },
      {
        label: "PLN",
        value: "PLN",
        emoji: "https://wise.com/web-art/assets/flags/pln.svg",
        desc: "Polish złoty",
      },
      {
        label: "RON",
        value: "RON",
        emoji: "https://wise.com/web-art/assets/flags/ron.svg",
        desc: "Romanian leu",
      },
      {
        label: "SEK",
        value: "SEK",
        emoji: "https://wise.com/web-art/assets/flags/sek.svg",
        desc: "Swedish krona",
      },
      {
        label: "SGD",
        value: "SGD",
        emoji: "https://wise.com/web-art/assets/flags/sgd.svg",
        desc: "Singapore dollar",
      },
      {
        label: "TRY",
        value: "TRY",
        emoji: "https://wise.com/web-art/assets/flags/try.svg",
        desc: "Turkish lira",
      },
      {
        label: "UAH",
        value: "UAH",
        emoji: "https://wise.com/web-art/assets/flags/uah.svg",
        desc: "Ukrainian hryvnia",
      },
      {
        key: "USD",
        label: "USD",
        value: "USD",
        emoji: "https://wise.com/web-art/assets/flags/usd.svg",
        desc: "United States dollar",
      },
      {
        key: "Note",
        label:
          "Can't find it? <strong><u><a href='https://wise.com/wishes/'>Request the currency you need</a></u></strong>, <br />and we'll notify you once it's available.",
        value: "Note",
        emoji: "https://wise.com/wishes/",
        desc: "Can't find it? <strong></u>Request the currency you need</u></strong>, <br />and we'll notify you once it's available.",
        disabled: true,
      },
    ],
  },
];

export const chargesOption = [
  {
    label: <header style={headerStyle}>Payment methods</header>,
    title: "Payment methods",
    options: {
      AED: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
      EUR: [
        { label: "iDEAL ", value: "iDEAL", desc: "- No extra fees" },
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 46.78 EUR fee",
          percentageOfCharge: "0.4678",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 46.78 EUR fee",
          percentageOfCharge: "0.4678",
        },
        { label: "SOFORT", value: "SOFORT", desc: "- No extra fees" },
      ],
      GBP: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 41.82 GBP fee",
          percentageOfCharge: "0.4182",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 41.82 GBP fee",
          percentageOfCharge: "0.4182",
        },
        {
          label: "SWIFT Transfer",
          value: "SWIFT Transfer",
          desc: "- Only your bank's fees",
        },
      ],
      INR: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
      USD: [
        {
          label: "Connected bank account (ACH)",
          value: "Connected bank account (ACH)",
          desc: "- 12.98 USD fee",
          percentageOfCharge: "0.1298",
        },
        {
          label: "Wire transfer",
          value: "Wire transfer",
          desc: "- 3.52 USD fee",
          percentageOfCharge: "0.0352",
        },
      ],
      AUD: [
        {
          label: "PayID",
          value: "PayID",
          desc: "- No extra fees",
        },
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 36.86 AUD fee",
          percentageOfCharge: "0.3686",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 136.12 AUD fee",
          percentageOfCharge: "1.3612",
        },
      ],
      BGN: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 55.69 BGN fee",
          percentageOfCharge: "0.5569",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 55.69 BGN fee",
          percentageOfCharge: "0.5569",
        },
      ],
      BRL: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 314.77 BRL fee",
          percentageOfCharge: "3.1477",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 314.77 BRL fee",
          percentageOfCharge: "3.1477",
        },
      ],
      CAD: [
        {
          label: "INTERAC e-Transfer®",
          value: "INTERAC e-Transfer®",
          desc: "- 3.24 CAD fee",
          percentageOfCharge: "0.0324",
        },
        {
          label: "Domestic wire transfer",
          value: "Domestic wire transfer",
          desc: "- 2.30 CAD fee",
          percentageOfCharge: "0.0230",
        },
        {
          label: "Bill payment",
          value: "Bill payment",
          desc: "- 2.30 CAD fee",
          percentageOfCharge: "0.0230",
        },
      ],
      CHF: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
      CNY: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Alipay",
          value: "Alipay",
          desc: "- 81.33 CNY fee",
          percentageOfCharge: "0.813",
        },
      ],
      CZK: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 74.44 CZK fee",
          percentageOfCharge: "0.744",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 74.44 CZK fee",
          percentageOfCharge: "0.744",
        },
      ],
      DKK: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 56.68 DKK fee",
          percentageOfCharge: "0.566",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 56.68 DKK fee",
          percentageOfCharge: "0.566",
        },
        {
          label: "Trustly",
          value: "Trustly",
          desc: "- 7.82 DKK fee",
          percentageOfCharge: "0.0782",
        },
      ],
      HKD: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 273.32 HKD fee",
          percentageOfCharge: "2.7332",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 273.32 HKD fee",
          percentageOfCharge: "2.7332",
        },
      ],
      HUF: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 81 HUF fee",
          percentageOfCharge: "0.81",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 81 HUF fee",
          percentageOfCharge: "0.81",
        },
      ],
      ILS: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
      IDR: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
      JPY: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 319 JPY fee",
          percentageOfCharge: "3.19",
        },
      ],
      MYR: [
        {
          label: "Online Banking (FPX)",
          value: "Online Banking (FPX)",
          desc: "- No extra fees",
        },
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
      NOK: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 39.84 NOK fee",
          percentageOfCharge: "0.3984",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 39.84 NOK fee",
          percentageOfCharge: "0.3984",
        },
      ],
      NZD: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 145.84 NZD fee",
          percentageOfCharge: "1.4584",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 145.84 NZD fee",
          percentageOfCharge: "1.4584",
        },
      ],
      PLN: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 61.62 PLN fee",
          percentageOfCharge: "0.6162",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 61.62 PLN fee",
          percentageOfCharge: "0.6162",
        },
      ],
      RON: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 48.76 RON fee",
          percentageOfCharge: "0.4876",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 48.76 RON fee",
          percentageOfCharge: "0.4876",
        },
      ],
      SEK: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 71.49 SEK fee",
          percentageOfCharge: "0.7149",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 71.49 SEK fee",
          percentageOfCharge: "0.7149",
        },
        {
          label: "Bankgiro",
          value: "Bankgiro",
          desc: "- No extra fees",
        },
        {
          label: "Trustly",
          value: "Trustly",
          desc: "- 8.51 SEK fee",
          percentageOfCharge: "0.0851",
        },
      ],
      SGD: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
        {
          label: "Debit card",
          value: "Debit card",
          desc: "- 299.74 SGD fee",
          percentageOfCharge: "2.9974",
        },
        {
          label: "Credit card",
          value: "Credit card",
          desc: "- 305.38 SGD fee",
          percentageOfCharge: "3.053",
        },
        {
          label: "Linked Bank Account",
          value: "Linked Bank Account",
          desc: "- 1.29 SGD fee",
          percentageOfCharge: "0.0129",
        },
        {
          label: "PayNow",
          value: "PayNow",
          desc: "- No extra fees",
        },
      ],
      TRY: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
      UAH: [
        {
          label: "Bank transfer",
          value: "Bank transfer",
          desc: "- No extra fees",
        },
      ],
    },
  },
];

export const getDataFromLs = () => {
  const DATA = localStorage.getItem("selectedCountries");
  const PARSEDDATA = JSON.parse(DATA);
  const currencyDataObj = {
    source: PARSEDDATA.source,
    destination: PARSEDDATA.destination,
    sourceToLower: PARSEDDATA.source.toLowerCase(),
    destinationToLower: PARSEDDATA.destination.toLowerCase(),
  };
  return currencyDataObj;
};

export const setDataToLs = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("storage"));
};
