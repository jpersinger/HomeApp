import { isUndefined } from "lodash";
import { css } from "react-emotion";
import theme from "../theme";

export const OVERLAY_TRANSLATE = "-100vw";
export const OVERLAY_OPACITY = 0.4;

interface OverlayAnimationPoint {
  opacity?: number;
  transform?: number | string;
}

interface Config {
  duration?: number;
}

interface OverlayAnimationSet {
  initial: OverlayAnimationPoint & { from: OverlayAnimationPoint };
  in: OverlayAnimationPoint & { from: OverlayAnimationPoint } & {
    config: Config;
  };
  out: OverlayAnimationPoint & { from: OverlayAnimationPoint } & {
    config: Config;
  };
}

export const getAnimationSet = ({
  duration,
  translate
}: {
  duration?: number;
  translate?: boolean;
}): OverlayAnimationSet => {
  const translateIn =
    isUndefined(translate) || translate ? 0 : OVERLAY_TRANSLATE;
  const translateOut = !translate ? 0 : OVERLAY_TRANSLATE;

  return getAnimationSetObject({
    initial: { opacity: 0, transform: `translateX(${translateOut})` },
    inValues: {
      opacity: OVERLAY_OPACITY,
      transform: `translateX(${translateIn})`
    },
    outValues: {
      transform: `translateX("${translateOut}")`
    },
    duration
  });
};

const getAnimationSetObject = ({
  initial,
  inValues,
  outValues,
  duration
}: {
  initial?: OverlayAnimationPoint;
  inValues?: OverlayAnimationPoint;
  outValues?: OverlayAnimationPoint;
  duration?: number;
}): OverlayAnimationSet => {
  const inView = {
    opacity: 1,
    ...inValues
  };
  const outOfView = {
    opacity: 0,
    ...outValues
  };

  let config = {};
  if (duration) {
    config = {
      duration
    };
  }

  return {
    initial: {
      ...initial,
      from: initial || {}
    },
    in: {
      ...inView,
      from: outOfView || {},
      config
    },
    out: {
      ...outOfView,
      from: inView || {},
      config
    }
  };
};

export const overlayClass = css`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.darkBlue};
  opacity: 0.4;
  position: fixed;
  top: 0;
  z-index: 1;
`;
