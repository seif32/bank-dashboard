import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../types";
import { mockUser } from "../services/mockData";

type AuthContextType = {
  isLogged: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  function login(email: string, password: string) {
    if (email === "seif@gmail.com" && password === "password") {
      setUser(mockUser);
    }
  }

  function logout() {
    setUser(null);
  }

  const isLogged = user !== null;

  return (
    <AuthContext.Provider value={{ user, isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (authContext === null)
    throw new Error("useAuth must be used inside AuthProvider");
  return authContext;
}
