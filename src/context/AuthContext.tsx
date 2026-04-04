/**
 * Authentication Context
 * 🔄 BACKEND SWAP: Replace with Supabase Auth context using onAuthStateChange
 */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';
import { getCurrentUser, login as storeLogin, logout as storeLogout, signUp as storeSignUp, loginAsAdmin, type ClientType } from '@/lib/store';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => User;
  signup: (name: string, email: string, password: string, clientType: ClientType, company?: string) => User;
  logout: () => void;
  adminLogin: (password: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const login = (email: string, password: string) => {
    const u = storeLogin(email, password);
    setUser(u);
    return u;
  };

  const signup = (name: string, email: string, password: string, clientType: ClientType, company?: string) => {
    const u = storeSignUp(name, email, password, clientType, company);
    setUser(u);
    return u;
  };

  const logout = () => {
    storeLogout();
    setUser(null);
  };

  const adminLogin = (password: string) => {
    const success = loginAsAdmin(password);
    if (success) setUser(getCurrentUser());
    return success;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isAdmin: user?.isAdmin === true,
      login,
      signup,
      logout,
      adminLogin,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
