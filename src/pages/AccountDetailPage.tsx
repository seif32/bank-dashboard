import { useParams } from "react-router-dom";
import { mockAccounts, mockTransactions } from "../services/mockData";
import { Badge, Card } from "../components/ui";
import { format } from "date-fns";
import { formatCurrency } from "../utils";
import {
  transactionAmountColor,
  transactionTypeBadge,
} from "../features/transactions";
import { badgeVariantMap } from "../features/accounts";

export default function AccountDetailPage() {
  const { id } = useParams();
  if (id === undefined) return <div>Account not found</div>;

  const account = mockAccounts.find((account) => account.id === id);
  if (account === undefined) return <div>Account not found</div>;

  const transactions = mockTransactions.filter(
    (transaction) => transaction.accountId === account.id,
  );

  return (
    <div className="bg-stone-50 max-w-7xl px-6 py-8 mx-auto min-h-screen space-y-6">
      <Card>
        <div className="flex gap-2 items-center">
          <p className="text-2xl font-bold text-gray-900">{account.name}</p>
          <Badge variant={badgeVariantMap[account.type]}>{account.type}</Badge>
        </div>
        <div className="flex gap-3 items-end justify-between mt-4">
          <div>
            <p className="text-xs text-gray-400">Current Balance </p>
            <p className="text-xl font-bold">
              {formatCurrency(account.balance)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Created </p>
            <p className="text-sm">{format(account.createdAt, "MM/dd/yyyy")}</p>
          </div>
        </div>
      </Card>

      <div>
        <p className="text-xl font-semibold text-gray-900 ">
          Transaction History
        </p>
        {transactions.map((transaction) => {
          return (
            <div key={transaction.id} className="border-b border-gray-300 py-4">
              <div className="flex items-center justify-between">
                <p
                  className={`font-bold ${transactionAmountColor[transaction.type]}`}
                >
                  {formatCurrency(transaction.amount)}
                </p>
                <Badge variant={transactionTypeBadge[transaction.type]}>
                  {transaction.type}
                </Badge>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <p>{transaction.description}</p>
                <p>{format(transaction.date, "MM/dd/yyyy")}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
