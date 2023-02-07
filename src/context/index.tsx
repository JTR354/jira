import { AuthProvider } from "./auth-context";

export const AppProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
