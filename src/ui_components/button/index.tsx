import styled from "react-emotion";
import theme from "../theme";

const Button = styled("button")<{
  color?: string;
  textOnly?: boolean;
  fontSize?: number | string;
  textColor?: string;
}>(
  ({
    color = theme.colors.affirmative,
    textOnly,
    fontSize = "1em",
    textColor = theme.colors.secondary
  }) => `
  font-size: ${fontSize};
  font-family: Quicksand;
  height: 2.4em;
  border: none;
  width: ${textOnly ? "" : "100%"};
  border-radius: 0.5em;
  background-color: ${textOnly ? "transparent" : color};
  color: ${textOnly ? textColor : theme.colors.white};
  cursor: pointer;
  white-space: nowrap;
  font-weight: ${textOnly ? 600 : 500};
  padding: ${textOnly ? 0 : ""};
  :disabled {
    cursor: default;
    background-color: gray;
  }
`
);

export default Button;
