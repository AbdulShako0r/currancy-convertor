import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // Corrected path from `res[currency]` to `res.rates`
      })
      .catch((error) => console.error("Failed to fetch currency data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
