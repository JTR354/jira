import { ConfigProvider } from "antd";
import { AuthProvider } from "./auth-context";

export const AppProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <AuthProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
          // algorithm: theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </AuthProvider>
  );
};
