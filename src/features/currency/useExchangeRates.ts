import type { ExchangeRate, FetchState } from "../../types";
import { fetchExchangeRate } from "../../services/currencyService";
import { useQuery } from "@tanstack/react-query";

export default function useExchangeRates(): FetchState<ExchangeRate> {
  const {
    data: ExchangeRates,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["ExchangeRates"],
    queryFn: fetchExchangeRate,
  });
  if (isLoading) return { type: "loading" };
  if (isError)
    return { type: "error", error: error?.message ?? "Failed to fetch" };
  if (ExchangeRates?.type === "success") {
    return { type: "success", data: ExchangeRates.data };
  } else {
    return { type: "error", error: ExchangeRates?.error ?? "Unknown Error" };
  }
}
