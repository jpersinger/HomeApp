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

export const MODAL_ANIMATION_DURATION = 300;

export const MODAL_ANIMATIONS = {
  fadeIn: {
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: MODAL_ANIMATION_DURATION }
  },
  fadeOut: {
    opacity: 0,
    from: { opacity: 1 },
    config: { duration: MODAL_ANIMATION_DURATION }
  }
};
