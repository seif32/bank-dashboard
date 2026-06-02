import { createBrowserRouter } from "react-router-dom";
import { LoginPage, ProtectedRoute } from "../features/auth";
import { AccountDetailPage, AccountsPage, DashboardPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/accounts", element: <AccountsPage /> },
      { path: "/accounts/:id", element: <AccountDetailPage /> },
      { path: "/transactions", element: <h1>transactions</h1> },
      { path: "/transfers", element: <h1>transfers</h1> },
      { path: "/currency", element: <h1>currency</h1> },
      { path: "/settings", element: <h1>settings</h1> },
      { path: "/notifications", element: <h1>notifications</h1> },
    ],
  },
]);

export default router;
