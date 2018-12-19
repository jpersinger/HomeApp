import styled from "react-emotion";
import theme from "../theme";

export const CheckboxRowContainer = styled("button")<{
  selected: boolean;
  disabled?: boolean;
}>(
  ({ selected, disabled }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${disabled ? "" : "pointer"};
  background-color: ${
    disabled
      ? theme.colors.transparentGray
      : selected
      ? theme.colors.transparentAffirmative
      : ""
  };
  width: 100%;
`
);

export const CheckboxRowButtonContainer = styled("div")`
  padding-right: 1em;
  display: flex;
  align-items: center;
`;
