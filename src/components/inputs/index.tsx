import styled from "react-emotion";
import theme from "../theme";

export const Input = styled("input")`
  width: 100%;
  height: 2.4em;
  font-family: Quicksand;
  font-size: 1em;
  border: none;
  border-bottom: ${theme.borders.listRowBorder};
`;

export const TextArea = styled("textarea")`
  border-radius: 0.5em;
  font-size: 1em;
  font-family: Quicksand;
`;
