import { createBrowserRouter } from "react-router-dom";
import { LoginPage, ProtectedRoute } from "../features/auth";
import {
  AccountDetailPage,
  AccountsPage,
  CurrencyPage,
  DashboardPage,
  NotificationsPage,
  SettingsPage,
  TransactionsPage,
  TransfersPage,
} from "../pages";
import AppLayout from "../components/AppLayout";

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
          { path: "/notifications", element: <NotificationsPage /> },
          { path: "/settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
]);

export default router;
