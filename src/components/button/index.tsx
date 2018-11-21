import styled from "react-emotion";
import theme from "../theme";

const Button = styled("button")<{ color?: string }>(
  ({ color = theme.colors.affirmative }) => `
  font-size: 1em;
  font-family: Quicksand;
  height: 2.4em;
  border: none;
  width: 100%;
  border-radius: 0.5em;
  background-color: ${color};
  color: ${theme.colors.white};
  cursor: pointer;
  white-space: nowrap;
  :disabled {
    cursor: default;
    background-color: gray;
  }
`
);

export default Button;
