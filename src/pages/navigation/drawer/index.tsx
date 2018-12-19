import React, { useEffect } from "react";
import { animated, useSpring, useTrail } from "react-spring/hooks";
import IconButton from "../../../ui_components/icon/iconButton";
import Overlay from "../../../ui_components/overlay";
import { PATH_MAP } from "../constants";
import {
  CloseButtonContainer,
  FADE_ANIMATIONS,
  ListStyle,
  navContainer,
  NAV_ANIMATIONS
} from "./components";
import LinkItem from "./linkItem";

interface Props {
  open: boolean;
  toggleOpen: (open: boolean) => void;
}

const Drawer = ({ open, toggleOpen }: Props) => {
  const links = [
    PATH_MAP.home,
    PATH_MAP.budget,
    PATH_MAP.food,
    PATH_MAP.settings
  ];

  const [navProps, setNavProps] = useSpring(() => NAV_ANIMATIONS.initial);

  const [fadeProps, setFadeProps] = useTrail(
    links.length,
    () => FADE_ANIMATIONS.initial
  );

  useEffect(
    () => {
      if (open) {
        setNavProps(NAV_ANIMATIONS.slideIn);
        setFadeProps(FADE_ANIMATIONS.fadeIn);
        // setOverlayProps(OVERLAY_ANIMATIONS.slideIn);
      } else {
        setNavProps(NAV_ANIMATIONS.slideOut);
        setFadeProps(FADE_ANIMATIONS.fadeOut);
        // setOverlayProps(OVERLAY_ANIMATIONS.slideOut);
      }
    },
    [open]
  );

  return (
    <React.Fragment>
      <animated.div
        className={navContainer}
        style={{ ...navProps, position: "absolute", zIndex: 2 }}
      >
        <nav>
          <ListStyle>
            <CloseButtonContainer>
              <IconButton
                name="close"
                size={30}
                onClick={() => {
                  toggleOpen(false);
                }}
              />
            </CloseButtonContainer>

            {links.map((link, index) => (
              <animated.li key={link} style={fadeProps[index]}>
                <LinkItem path={link} toggleOpen={toggleOpen} />
              </animated.li>
            ))}
          </ListStyle>
        </nav>
      </animated.div>
      <Overlay
        open={open}
        translate
        onClick={() => {
          toggleOpen(false);
        }}
      />
    </React.Fragment>
  );
};

export default Drawer;
