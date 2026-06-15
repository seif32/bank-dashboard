import { PageWrapper } from "../components/ui";
import { mockAccounts } from "../services/mockData";
import { useNavigate } from "react-router-dom";
import type { Account } from "../types";
import { AccountCard } from "../features/accounts";
import { useCallback } from "react";

export default function AccountsPage() {
  const navigate = useNavigate();

  const lastViewedAccountId = sessionStorage.getItem("lastViewedAccountId");

  const handleClickAccount = useCallback(
    (account: Account) => {
      sessionStorage.setItem("lastViewedAccountId", account.id);
      navigate(`/accounts/${account.id}`);
    },
    [navigate],
  );

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-900">Accounts</h1>
      <div className="space-y-3">
        {mockAccounts.map((account) => (
          <AccountCard
            key={account.id}
            account={account}
            lastViewedAccountId={lastViewedAccountId}
            onClickAccount={handleClickAccount}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
