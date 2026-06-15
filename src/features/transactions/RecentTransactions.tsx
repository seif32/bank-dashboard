import type { Account, Transaction } from "../../types";
import TransactionItem from "./TransactionItem";

type RecentTransactionsProps = {
  transactions: Transaction[];
  accounts: Account[];
};

export default function RecentTransactions({
  transactions,
  accounts,
}: RecentTransactionsProps) {
  return (
    <div>
      <p className="text-xl font-semibold">Recent Transactions</p>
      {transactions.slice(0, 5).map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          accountName={
            accounts.find((account) => account.id === transaction.accountId)
              ?.name
          }
        />
      ))}
    </div>
  );
}
