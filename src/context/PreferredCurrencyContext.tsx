import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCookie, setCookie } from "../utils";

type PreferredCurrencyType = {
  preferredCurrency: string;
  updateCurrency: (currency: string) => void;
};

export const PreferredCurrencyContext =
  createContext<PreferredCurrencyType | null>(null);

export function PreferredCurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [preferredCurrency, setPreferredCurrency] = useState(
    () => getCookie("preferredCurrency") ?? "USD",
  );
  const updateCurrency = useCallback((currency: string) => {
    setPreferredCurrency(currency);
    setCookie("preferredCurrency", currency, 30);
  }, []);

  return (
    <PreferredCurrencyContext.Provider
      value={useMemo(
        () => ({ preferredCurrency, updateCurrency }),
        [preferredCurrency, updateCurrency],
      )}
    >
      {children}
    </PreferredCurrencyContext.Provider>
  );
}

export function usePreferredCurrency() {
  const preferredCurrencyContext = useContext(PreferredCurrencyContext);

  if (preferredCurrencyContext === null)
    throw new Error(
      "usePreferredCurrency must be used inside PreferredCurrencyProvider",
    );
  return preferredCurrencyContext;
}
