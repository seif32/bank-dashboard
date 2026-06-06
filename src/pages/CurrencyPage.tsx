import { useState } from "react";
import { Card, Input, PageWrapper, Select, Spinner } from "../components/ui";
import { convertCurrency, useExchangeRates } from "../features/currency";
import { formatCurrency } from "../utils";

export default function CurrencyPage() {
  const data = useExchangeRates();
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EGP");
  const [amount, setAmount] = useState<number>(1);

  if (data.type === "loading")
    return (
      <PageWrapper>
        <Spinner size="lg" />
      </PageWrapper>
    );
  if (data.type === "error")
    return (
      <div className="grid place-items-center text-red-600 font-semibold text-xl">
        <p>{data.error}</p>
      </div>
    );
  const result = convertCurrency(
    fromCurrency,
    toCurrency,
    data.data.rates,
    amount,
  );
  return (
    <PageWrapper>
      <Card className="max-w-md mx-auto ">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Currency Converter
        </h2>
        <div className="space-y-4 flex flex-col">
          <Input
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
          />
          <Select
            options={Object.keys(data.data.rates)}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            label="From"
          />
          <Select
            options={Object.keys(data.data.rates)}
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            label="To"
          />
          <div className="flex justify-center flex-col items-center">
            <p className="text-xs text-gray-400">Converted Amount</p>
            <p className="font-semibold text-gray-900 text-xl">
              {formatCurrency(result, toCurrency)}
            </p>
          </div>
        </div>
      </Card>
    </PageWrapper>
  );
}
