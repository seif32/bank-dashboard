import { useEffect, useState } from "react";
import type { ExchangeRate, FetchState } from "../../types";
import { fetchExchangeRate } from "../../services/currencyService";

export default function useExchangeRates(): FetchState<ExchangeRate> {
  const [rate, setRate] = useState<FetchState<ExchangeRate>>({
    type: "loading",
  });
  useEffect(() => {
    async function load() {
      const result = await fetchExchangeRate();
      if (result.type === "success") {
        setRate({ type: "success", data: result.data });
      } else {
        setRate({ type: "error", error: result.error });
      }
    }

    load();
  }, []);

  return rate;
}
