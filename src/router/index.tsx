import { createBrowserRouter } from "react-router-dom";
import { LoginPage, ProtectedRoute } from "../features/auth";
import {
  AccountDetailPage,
  AccountsPage,
  CurrencyPage,
  DashboardPage,
} from "../pages";
import AppLayout from "../components/AppLayout";
import TransfersPage from "../pages/TransfersPage";
import TransactionsPage from "../pages/TransactionsPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/accounts", element: <AccountsPage /> },
          { path: "/accounts/:id", element: <AccountDetailPage /> },
          { path: "/currency", element: <CurrencyPage /> },
          { path: "/transactions", element: <TransactionsPage /> },
          { path: "/transfers", element: <TransfersPage /> },
          { path: "/settings", element: <h1>settings</h1> },
          { path: "/notifications", element: <h1>notifications</h1> },
        ],
      },
    ],
  },
]);

export default router;
