import type { ApiResponse, ExchangeRate } from "../types";

export async function fetchExchangeRate(): Promise<ApiResponse<ExchangeRate>> {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const raw: unknown = await response.json();

    if (!isExchangeRate(raw)) {
      return {
        type: "failure",
        error: "Not the right ExchangeRate type",
      };
    }

    return {
      type: "success",
      data: raw,
    };
  } catch (err) {
    return {
      type: "failure",
      error: err instanceof Error ? err.message : "Unknown Error",
    };
  }
}

function isExchangeRate(data: unknown): data is ExchangeRate {
  if (typeof data === "object" && data !== null) {
    if (
      "base_code" in data &&
      "rates" in data &&
      "time_last_update_utc" in data
    ) {
      if (
        typeof data.base_code === "string" &&
        typeof data.rates === "object" &&
        typeof data.time_last_update_utc === "string"
      ) {
        return true;
      }
    }
  }
  return false;
}
