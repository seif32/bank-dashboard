import { format } from "date-fns";
import { Badge, Card } from "../components/ui";
import { mockAccounts } from "../services/mockData";
import { formatCurrency } from "../utils";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { badgeVariantMap } from "../features/accounts/accountUtils";
import type { Account } from "../types";

export default function AccountsPage() {
  const navigate = useNavigate();

  const lastViewedAccountId = sessionStorage.getItem("lastViewedAccountId");

  function handleClickAccount(account: Account) {
    sessionStorage.setItem("lastViewedAccountId", account.id);
    navigate(`/accounts/${account.id}`);
  }

  return (
    <div className="bg-stone-50 px-6 py-8 max-w-7xl mx-auto min-h-screen space-y-3">
      <h1 className="text-2xl font-bold text-gray-900">Accounts</h1>
      <div className="space-y-3">
        {mockAccounts.map((account) => {
          return (
            <Card
              className=" relative flex justify-between  py-4 hover:shadow-md transition-shadow cursor-pointer "
              onClick={() => handleClickAccount(account)}
              key={account.id}
            >
              <div className="flex flex-col items-start justify-between gap-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900">{account.name}</p>
                  <Badge variant={badgeVariantMap[account.type]}>
                    {account.type}
                  </Badge>
                </div>
                <p className="text-xs text-gray-400">
                  Created: {format(account.createdAt, "MM/dd/yyyy")}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs text-gray-400">Current Balance</p>
                <p className="font-bold text-lg">
                  {formatCurrency(account.balance)}
                </p>
                <ChevronRight className="text-gray-400 w-4 h-4" />
              </div>
              {lastViewedAccountId === account.id && (
                <Badge variant="info" className="absolute left-0 -top-1 ">
                  last viewed
                </Badge>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
