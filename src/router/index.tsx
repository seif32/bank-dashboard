import { createBrowserRouter } from "react-router-dom";
import { LoginPage, ProtectedRoute } from "../features/auth";
import AccountSummaryCard from "../features/accounts/AccountSummaryCard";
import { mockAccounts, mockTransactions } from "../services/mockData";
import RecentTransactions from "../features/transactions/RecentTransactions";

const router = createBrowserRouter([
  {
    path: "/login",
    // element: <LoginPage />,
    element: (
      <div className="p-8">
        <RecentTransactions
          accounts={mockAccounts}
          transactions={mockTransactions}
        />
      </div>
    ),
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/dashboard", element: <h1>dashboard</h1> },
      { path: "/accounts", element: <h1>accounts</h1> },
      { path: "/accounts/:id", element: <h1>account id</h1> },
      { path: "/transactions", element: <h1>transactions</h1> },
      { path: "/transfers", element: <h1>transfers</h1> },
      { path: "/currency", element: <h1>currency</h1> },
      { path: "/settings", element: <h1>settings</h1> },
      { path: "/notifications", element: <h1>notifications</h1> },
    ],
  },
]);

export default router;
