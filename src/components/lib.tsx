import styled from "@emotion/styled";

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
