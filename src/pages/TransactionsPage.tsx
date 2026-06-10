import { PageWrapper } from "../components/ui";
import BalanceChart from "../features/charts/BalanceChart";
import SpendingChart from "../features/charts/SpendingChart";
import { mockTransactions } from "../services/mockData";

export default function TransactionsPage() {
  return (
    <PageWrapper>
      <div className="space-y-4">
        <BalanceChart transactions={mockTransactions} />
        <SpendingChart transactions={mockTransactions} />
      </div>
    </PageWrapper>
  );
}
