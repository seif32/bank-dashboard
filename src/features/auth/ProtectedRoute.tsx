import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLogged } = useAuth();

  if (!isLogged) return <Navigate to={"/login"} />;

  if (isLogged) return children;
}
