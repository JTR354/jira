import styled from "@emotion/styled";
import { Spin, Typography } from "antd";

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
`;

export const Col = styled.div<{ gap?: string }>`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  margin-right: ${(props) =>
    typeof props.gap === "string" ? props.gap : "2rem"};
`;

export const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const FullPageLoading = () => {
  return (
    <FullPage>
      <Spin size="large" />
    </FullPage>
  );
};

export const FullPageError: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <FullPage>
      <Typography.Text type="danger">{children}</Typography.Text>
    </FullPage>
  );
};
