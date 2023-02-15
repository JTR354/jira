import { ConfigProvider, Typography } from "antd";
import { AuthProvider } from "./auth-context";
// import { QueryClientProvider } from "react-query/types/react";
// import { QueryClient } from "react-query/types/core";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorBoundary from "./ErrorBoundary";

export const AppProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ErrorBoundary
        fallback={(error) => {
          return (
            <Typography.Text type="danger">{error?.message}</Typography.Text>
          );
        }}
      >
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
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
