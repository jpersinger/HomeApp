import styled from "react-emotion";
import theme from "../../../ui_components/theme";

export const MessageContainer = styled("div")`
  width: 80vw;
  min-width: 350;
  margin-left: 10vw;
`;

export const MessageRowContainer = styled("div")<{ isTopLevel?: boolean }>(
  ({ isTopLevel }) => `
  padding-bottom: 1em;
  border-top: ${isTopLevel ? "none" : `1px solid ${theme.colors.gray}`};
`
);

export const AddMessageContainer = styled("div")`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 2em 2em 0;
`;
