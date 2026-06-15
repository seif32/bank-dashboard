import { Badge, Card } from "../../components/ui";
import { usePreferredCurrency } from "../../context/PreferredCurrencyContext";
import type { Account } from "../../types";
import { formatCurrency } from "../../utils";
import { convertCurrency } from "../currency";
import { badgeVariantMap } from "./accountUtils";

type AccountSummaryCardProps = {
  account: Account;
  rates: Record<string, number>;
};

export default function AccountSummaryCard({
  account,
  rates,
}: AccountSummaryCardProps) {
  const { preferredCurrency } = usePreferredCurrency();

  const result = convertCurrency(
    "USD",
    preferredCurrency,
    rates,
    account.balance,
  );

  return (
    <Card className="">
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-sm">{account.name}</p>
        <Badge variant={badgeVariantMap[account.type]} className="">
          {account.type}
        </Badge>
      </div>
      <span className="font-semibold text-3xl">
        {formatCurrency(result, preferredCurrency)}
      </span>
    </Card>
  );
}
