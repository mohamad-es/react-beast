// AuthContext.tsx
import { setAccessTokenForInterceptor } from "@/lib/axios/axios-instance";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessTokenState] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      setAccessToken(e.detail);
    };
    window.addEventListener("tokenRefreshed", handler);
    return () => window.removeEventListener("tokenRefreshed", handler);
  }, []);

  // Whenever Context changes, update the interceptor
  const setAccessToken = (token: string | null) => {
    setAccessTokenState(token);
    setAccessTokenForInterceptor(token);
  };

  return <AuthContext.Provider value={{ accessToken, setAccessToken }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
