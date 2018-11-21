import styled from "react-emotion";
import theme from "../theme";

export const CheckboxRowContainer = styled("div")<{ selected: boolean }>(
  ({ selected }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${selected ? theme.colors.transparentAffirmative : ""}
`
);
