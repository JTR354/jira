import React from "react";
import { useState } from "react";
import { User } from "screens/project-list/search-panel";
import * as auth from "auth-provider";

export const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (formData: FormData) => Promise<void>;
      register: (formData: FormData) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

interface FormData {
  username: string;
  password: string;
}

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (formData: FormData) => auth.login(formData).then(setUser);
  const register = (formData: FormData) =>
    auth.register(formData).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must in the AuthProver!");
  }
  return context;
};
