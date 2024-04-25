import { useEffect, useState } from "react";
import axios from "axios";

//Utils
import { getDataFromLs } from "../helper";

export const UseCurrencyInfo = () => {
  const [currencyInfo, setCurrencyInfo] = useState({});
  const { sourceToLower } = getDataFromLs();

  const fetchCurrencyInfo = async (sourceToLower) => {
    let fetchURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${sourceToLower}.json`;
    let response = await axios.get(fetchURL);
    if (response && response.data)
      setCurrencyInfo(response.data[sourceToLower]);
  };

  useEffect(() => {
    fetchCurrencyInfo(sourceToLower);
  }, []);

  useEffect(() => {
    fetchCurrencyInfo(sourceToLower);
  }, [sourceToLower]);

  return { currencyInfo };
};
