import { useMemo } from "react";
import { AccountSummaryCard } from "../features/accounts";
import { RecentTransactions } from "../features/transactions";
import { mockAccounts, mockTransactions } from "../services/mockData";
import { formatCurrency } from "../utils";

export default function DashboardPage() {
  const totalBalance = useMemo(() => {
    return mockAccounts.reduce((total, curr) => {
      return total + curr.balance;
    }, 0);
  }, []);

  return (
    <div className="bg-gray-50 px-6 py-8 space-y-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div>
        <span className="text-4xl font-bold">
          {formatCurrency(totalBalance)}
        </span>
        <h2 className="text-sm text-gray-500">Total Balance</h2>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {mockAccounts.map((account) => (
          <AccountSummaryCard account={account} key={account.id} />
        ))}
      </div>
      <RecentTransactions
        accounts={mockAccounts}
        transactions={mockTransactions}
      />
    </div>
  );
}
