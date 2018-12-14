import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring/hooks";
import {
  getAnimationSet,
  overlayClass,
  OVERLAY_OPACITY,
  OVERLAY_TRANSLATE
} from "./components";

interface Props {
  open: boolean;
  duration?: number;
  translate?: boolean;
}

const Overlay = ({ open, duration, translate }: Props) => {
  const animationSet = getAnimationSet({
    inValues: {
      opacity: OVERLAY_OPACITY,
      transform: `translateX(${translate ? 0 : OVERLAY_TRANSLATE})`
    },
    outValues: {
      transform: `translateX(${translate ? OVERLAY_TRANSLATE : 0})`
    },
    duration
  });
  console.log(animationSet, open);
  const [overlayProps, setOverlayProps] = useSpring(() =>
    open ? animationSet.in : animationSet.out
  );

  useEffect(
    () => {
      console.log("open", open);
      if (open) {
        setOverlayProps(animationSet.in);
      } else {
        setOverlayProps(animationSet.out);
      }
    },
    [open]
  );

  return <animated.div style={overlayProps} className={overlayClass} />;
};

export default Overlay;
