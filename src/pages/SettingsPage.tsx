import { PageWrapper, Select, Spinner } from "../components/ui";
import type { OptionsType } from "../components/ui/Select";
import { usePreferredCurrency } from "../context/PreferredCurrencyContext";
import { useExchangeRates } from "../features/currency";

export default function SettingsPage() {
  const rates = useExchangeRates();
  const { preferredCurrency, updateCurrency } = usePreferredCurrency();

  if (rates.type === "loading")
    return (
      <PageWrapper>
        <Spinner />
      </PageWrapper>
    );

  if (rates.type === "error")
    return (
      <PageWrapper>
        <div>Error: {rates.error}</div>
      </PageWrapper>
    );

  const ratesOptions: OptionsType[] = Object.keys(rates.data.rates).map(
    (rate) => ({
      label: rate,
      value: rate,
    }),
  );

  function handleCurrencyChange(e: React.ChangeEvent<HTMLSelectElement>) {
    updateCurrency(e.target.value);
  }

  return (
    <PageWrapper>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div>
          <Select
            options={ratesOptions}
            label="Currency"
            onChange={(e) => handleCurrencyChange(e)}
            value={preferredCurrency}
          />
        </div>
      </div>
    </PageWrapper>
  );
}
