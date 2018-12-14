import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring/hooks";
import { getAnimationSet, overlayClass } from "./components";

interface Props {
  open: boolean;
  duration?: number;
  translate?: boolean;
  onClick?: () => void;
}

const Overlay = ({ open, duration, translate, onClick }: Props) => {
  const animationSet = getAnimationSet({ duration, translate });

  const [overlayProps, setOverlayProps] = useSpring(() => animationSet.initial);

  useEffect(
    () => {
      if (open) {
        setOverlayProps(animationSet.in);
      } else {
        setOverlayProps(animationSet.out);
      }
    },
    [open]
  );

  return (
    <animated.div
      style={overlayProps}
      className={overlayClass}
      onClick={onClick}
    />
  );
};

export default Overlay;
