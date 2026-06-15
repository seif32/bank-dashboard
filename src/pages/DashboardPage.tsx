import { useMemo } from "react";
import { AccountSummaryCard } from "../features/accounts";
import { RecentTransactions } from "../features/transactions";
import { mockAccounts, mockTransactions } from "../services/mockData";
import { formatCurrency } from "../utils";
import { PageWrapper, Spinner } from "../components/ui";
import { BalanceChart, SpendingChart } from "../features/charts";
import { usePreferredCurrency } from "../context/PreferredCurrencyContext";
import { convertCurrency, useExchangeRates } from "../features/currency";

export default function DashboardPage() {
  const totalBalance = useMemo(() => {
    return mockAccounts.reduce((total, curr) => {
      return total + curr.balance;
    }, 0);
  }, []);

  const { preferredCurrency } = usePreferredCurrency();
  const rates = useExchangeRates();

  if (rates.type === "loading")
    return (
      <PageWrapper>
        <Spinner />
      </PageWrapper>
    );

  if (rates.type === "error")
    return (
      <PageWrapper>
        <div>Error</div>
      </PageWrapper>
    );
  const totalBalanceWithCurrency = convertCurrency(
    "USD",
    preferredCurrency,
    rates.data.rates,
    totalBalance,
  );

  return (
    <PageWrapper>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div>
          <span className="text-4xl font-bold">
            {formatCurrency(totalBalanceWithCurrency, preferredCurrency)}
          </span>
          <h2 className="text-sm text-gray-500">Total Balance</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {mockAccounts.map((account) => (
            <AccountSummaryCard
              account={account}
              key={account.id}
              rates={rates.data.rates}
            />
          ))}
        </div>
        <div className="space-y-4 ">
          <BalanceChart transactions={mockTransactions} />
          <SpendingChart transactions={mockTransactions} />
        </div>
        <RecentTransactions
          accounts={mockAccounts}
          transactions={mockTransactions}
        />
      </div>
    </PageWrapper>
  );
}
