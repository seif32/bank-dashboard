import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./features/auth/LoginPage";

export default function App() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}
