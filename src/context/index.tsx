import { ConfigProvider } from "antd";
import { AuthProvider } from "./auth-context";
// import { QueryClientProvider } from "react-query/types/react";
// import { QueryClient } from "react-query/types/core";
import { QueryClient, QueryClientProvider } from "react-query";

export const AppProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
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
    </QueryClientProvider>
  );
};
