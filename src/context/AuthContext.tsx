import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
  isAdmin: boolean;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  signup: (name: string, email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ee-user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email: string, pass: string) => {
    if (email === "admin@eagle.ch" && pass === "eagle-admin-2024") {
      const u = { email, isAdmin: true, name: "Admin" };
      setUser(u);
      localStorage.setItem("ee-user", JSON.stringify(u));
      return true;
    }
    const u = { email, isAdmin: false, name: email.split("@")[0] };
    setUser(u);
    localStorage.setItem("ee-user", JSON.stringify(u));
    return true;
  };

  const signup = (name: string, email: string) => {
    const u = { email, isAdmin: false, name };
    setUser(u);
    localStorage.setItem("ee-user", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ee-user");
  };

  return <AuthContext.Provider value={{ user, login, logout, signup }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
