import React from "react";
// import { useState } from "react";
import { User } from "screens/project-list/search-panel";
import * as auth from "auth-provider";
import { http } from "utils/http";
import { useMount } from "../utils/index";
import { useAsync } from "utils/use-async";
import { FullPageLoading, FullPageError } from "../components/lib";

export const AuthContext = React.createContext<{
  user: User | void;
  login: (formData: FormData) => Promise<void>;
  register: (formData: FormData) => Promise<void>;
  logout: () => Promise<void>;
} | void>(undefined);
AuthContext.displayName = "AuthContext";

interface FormData {
  username: string;
  password: string;
}

const bootstrap = async () => {
  let user = undefined;
  const token = auth.getToken();
  if (token) {
    user = (await http("me", { token }))?.user;
  }
  return user;
};

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // const [user, setUser] = useState<User | null>(null);
  const {
    run,
    setData: setUser,
    data: user,
    error,
    isLoading,
    isIdle,
  } = useAsync<User | undefined>();
  const login = (formData: FormData) => auth.login(formData).then(setUser);
  const register = (formData: FormData) =>
    auth.register(formData).then(setUser);
  const logout = () => auth.logout().then(() => setUser(void 0));

  useMount(() => {
    run(bootstrap());
    // bootstrap().then(setUser);
  });

  if (isIdle || isLoading) {
    return <FullPageLoading></FullPageLoading>;
  }

  if (error) {
    return <FullPageError>{error.message}</FullPageError>;
  }

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
