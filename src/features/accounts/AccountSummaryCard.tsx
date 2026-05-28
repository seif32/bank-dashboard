import { Badge, Card } from "../../components/ui";
import type { Account } from "../../types";
import { formatCurrency } from "../../utils";

type AccountSummaryCardProps = {
  account: Account;
};

export default function AccountSummaryCard({
  account,
}: AccountSummaryCardProps) {
  const badgeVariantMap: Record<
    Account["type"],
    "info" | "success" | "warning"
  > = {
    checking: "info",
    savings: "success",
    investment: "warning",
  };

  return (
    <Card className="">
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-sm">{account.name}</p>
        <Badge variant={badgeVariantMap[account.type]} className="">
          {account.type}
        </Badge>
      </div>
      <span className="font-semibold text-3xl">
        {formatCurrency(account.balance, account.currency)}
      </span>
    </Card>
  );
}
