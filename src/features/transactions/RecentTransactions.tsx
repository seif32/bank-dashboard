import { format } from "date-fns";
import type { Account, Transaction } from "../../types";
import { Badge } from "../../components/ui";
import { formatCurrency } from "../../utils";
import { transactionTypeBadge } from "./transactionUtils";

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
      {transactions.slice(0, 5).map((transaction) => {
        return (
          <div
            className=" border-gray-400 border-b flex flex-col py-4"
            key={transaction.id}
          >
            <Badge
              variant={transactionTypeBadge[transaction.type]}
              className="self-end"
            >
              {transaction.type}
            </Badge>
            <p className="text-gray-500 text-sm">
              {
                accounts.find((account) => account.id === transaction.accountId)
                  ?.name
              }
            </p>

            <p className="font-semibold text-lg">
              {formatCurrency(transaction.amount)}
            </p>
            <p>Balance After: {formatCurrency(transaction.balanceAfter)}</p>
            <div className="flex justify-between text-sm text-gray-400">
              <p>{transaction.description}</p>
              <p>{format(transaction.date, "MM/dd/yyyy")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
