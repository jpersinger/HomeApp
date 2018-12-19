import styled, { css } from "react-emotion";
import theme from "../theme";

export const DROPDOWN_ANIMATIONS = {
  initial: {
    maxHeight: 0,
    from: { maxHeight: 0 }
  },
  slideIn: {
    maxHeight: 200,
    from: { maxHeight: 0 }
    // config: { duration: MODAL_ANIMATION_DURATION }
  },
  slideOut: {
    maxHeight: 0,
    from: { maxHeight: 200 }
    // config: { duration: MODAL_ANIMATION_DURATION }
  }
};

export const DropdownContainer = styled("div")<{ listVisible: boolean }>(
  ({ listVisible }) => `
  width: 100%;
  position: relative;
  box-shadow: ${listVisible ? theme.boxShadows.dropdown : ""}
`
);

export const dropdownItemContainer = css`
  overflow: hidden;
  position: absolute;
  background-color: white;
  width: 100%;
  box-shadow: ${theme.boxShadows.dropdown};
  z-index: 1;
  overflow-y: scroll;
`;

export const DropdownInputContainer = styled("div")`
  cursor: pointer;
`;

export const dropdownItem = css`
  :hover {
    background-color: ${theme.colors.affirmative};
    color: white;
  }
  font-size: 16;
  border-radius: 0;
  width: 100%;
`;
