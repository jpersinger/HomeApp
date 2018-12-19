import styled from "react-emotion";
import theme from "../../ui_components/theme";

export const WelcomeHomeContainer = styled("div")`
  font-family: Quicksand;
  font-size: 2em;
  padding-bottom: 1em;
  text-align: center;
  color: ${theme.colors.affirmative};
  transition: color 300ms ease;
`;
