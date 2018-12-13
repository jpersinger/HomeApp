import styled, { css } from "react-emotion";

export const ListStyle = styled("ul")`
  list-style-type: none;
  padding: 0;
`;

export const navContainer = css`
  position: fixed;
  background-color: black;
  height: 100vh;
  width: 300px;
  top: 0;
`;

export const CloseButtonContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding-right: 1em;
`;

export const linkStyles = css`
  color: white;
  text-decoration: inherit;
  font-family: Quicksand;
  font-size: 1.3em;
  height: 2.5em;
  width: 100%;
  transition: all 300ms ease;
  display: flex;
  align-items: center;
  padding-left: 1em;
  :hover {
    background-color: darkgray;
    padding-left: 1.2em;
    font-weight: 600;
  }
`;

export const overlay = css`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
  top: 0;
  opacity: 0.1;
  z-index: 1;
`;

const NAV_TRANSLATE = "-300px";

export const NAV_ANIMATIONS = {
  initial: {
    transform: `translateX(${NAV_TRANSLATE})`,
    from: { transform: `translateX(${NAV_TRANSLATE})` }
  },
  slideIn: {
    transform: "translateX(0)",
    from: { transform: `translateX(${NAV_TRANSLATE})` }
  },
  slideOut: {
    transform: `translateX(${NAV_TRANSLATE})`,
    from: { transform: "translateX(0)" }
  }
};

export const FADE_ANIMATIONS = {
  initial: {
    opacity: 0,
    from: { opacity: 0 }
  },
  fadeIn: {
    opacity: 1,
    from: { opacity: 0 }
  },
  fadeOut: {
    opacity: 0,
    from: { opacity: 1 }
  }
};

const OVERLAY_TRANSLATE = "-100vw";
const OVERLAY_OPACITY = 0.3;

export const OVERLAY_ANIMATIONS = {
  initial: {
    transform: `translateX(${OVERLAY_TRANSLATE})`,
    opacity: 0,
    from: { transform: `translateX(${OVERLAY_TRANSLATE})`, opacity: 0 }
  },
  slideIn: {
    transform: "translateX(0)",
    opacity: OVERLAY_OPACITY,
    from: { transform: `translateX(${OVERLAY_TRANSLATE})`, opacity: 0 }
  },
  slideOut: {
    transform: `translateX(${OVERLAY_TRANSLATE})`,
    opacity: 0,
    from: { transform: "translateX(0)", opacity: OVERLAY_OPACITY }
  }
};
