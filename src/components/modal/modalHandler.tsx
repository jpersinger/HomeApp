import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring/hooks";
import { timeout } from "../../services";
import FixedPortal from "../fixedPortal";
import Overlay from "../overlay";
import { MODAL_ANIMATIONS, MODAL_ANIMATION_DURATION } from "./components";

interface Props {
  children: JSX.Element;
  open: boolean;
  containerStyles: string;
  onCloseComplete: () => void;
}

const ModalHandler = ({
  children,
  open,
  onCloseComplete,
  containerStyles
}: Props) => {
  const [props, setProps] = useSpring(() => MODAL_ANIMATIONS.fadeIn);
  const [overlayOpen, setOverlayOpen] = useState(true);

  const close = async () => {
    setProps(MODAL_ANIMATIONS.fadeOut);
    setOverlayOpen(false);
    await timeout(MODAL_ANIMATION_DURATION);
    onCloseComplete();
  };

  useEffect(
    () => {
      if (!open) {
        close();
      }
    },
    [open]
  );

  return (
    <FixedPortal>
      <Overlay
        open={overlayOpen}
        duration={MODAL_ANIMATION_DURATION}
        onClick={close}
      />
      <animated.div style={props} className={containerStyles}>
        {children}
      </animated.div>
    </FixedPortal>
  );
};

export default ModalHandler;
