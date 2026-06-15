import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NotificationProvider } from "./context/NotificationContext";
import { PreferredCurrencyProvider } from "./context/PreferredCurrencyContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <PreferredCurrencyProvider>
          <NotificationProvider>
            <RouterProvider router={router} />
          </NotificationProvider>
        </PreferredCurrencyProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
