import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { Badge, Card } from "../../components/ui";
import { formatCurrency } from "../../utils";
import { badgeVariantMap } from "./accountUtils";
import { memo } from "react";
import type { Account } from "../../types";

type AccountCardProps = {
  onClickAccount: (account: Account) => void;
  account: Account;
  lastViewedAccountId: string | null;
};

const AccountCard = memo(function AccountCard({
  account,
  onClickAccount,
  lastViewedAccountId,
}: AccountCardProps) {
  return (
    <Card
      className=" relative flex justify-between  py-4 hover:shadow-md transition-shadow cursor-pointer "
      onClick={() => onClickAccount(account)}
    >
      <div className="flex flex-col items-start justify-between gap-1">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-gray-900">{account.name}</p>
          <Badge variant={badgeVariantMap[account.type]}>{account.type}</Badge>
        </div>
        <p className="text-xs text-gray-400">
          Created: {format(account.createdAt, "MM/dd/yyyy")}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xs text-gray-400">Current Balance</p>
        <p className="font-bold text-lg">{formatCurrency(account.balance)}</p>
        <ChevronRight className="text-gray-400 w-4 h-4" />
      </div>
      {lastViewedAccountId === account.id && (
        <Badge variant="danger" className="absolute left-0 -top-1 ">
          last viewed
        </Badge>
      )}
    </Card>
  );
});

export default AccountCard;
