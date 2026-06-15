import { format } from "date-fns";
import { formatCurrency } from "../../utils";
import { Badge } from "../../components/ui";
import type { Transaction } from "../../types";
import { transactionTypeBadge } from "./transactionUtils";
import { memo } from "react";

type TransactionItemProps = {
  accountName: string | undefined;
  transaction: Transaction;
};

const TransactionItem = memo(function TransactionItem({
  accountName,
  transaction,
}: TransactionItemProps) {
  return (
    <div className=" border-gray-400 border-b flex flex-col py-4">
      <Badge
        variant={transactionTypeBadge[transaction.type]}
        className="self-end"
      >
        {transaction.type}
      </Badge>
      <p className="text-gray-500 text-sm">{accountName}</p>

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
});

export default TransactionItem;
