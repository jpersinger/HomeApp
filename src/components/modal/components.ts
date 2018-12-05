import styled from "react-emotion";
import theme from "../theme";

export const Overlay = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.darkBlue};
  opacity: 0.4;
  position: fixed;
  top: 0;
  z-index: 2;
`;
