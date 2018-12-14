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
  in: OverlayAnimationPoint & { from: OverlayAnimationPoint } & {
    config: Config;
  };
  out: OverlayAnimationPoint & { from: OverlayAnimationPoint } & {
    config: Config;
  };
}

export const getAnimationSet = ({
  inValues,
  outValues,
  duration
}: {
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
    in: {
      ...inView,
      from: {
        ...outOfView
      },
      config
    },
    out: {
      ...outOfView,
      from: {
        ...inView
      },
      config
    }
  };
};

// export const OVERLAY_ANIMATIONS = {
//   initial: {
//     transform: `translateX(${OVERLAY_TRANSLATE})`,
//     opacity: 0,
//     from: { transform: `translateX(${OVERLAY_TRANSLATE})`, opacity: 0 }
//   },
//   slideIn: {
//     transform: "translateX(0)",
//     opacity: OVERLAY_OPACITY,
//     from: { transform: `translateX(${OVERLAY_TRANSLATE})`, opacity: 0 }
//   },
//   slideOut: {
//     transform: `translateX(${OVERLAY_TRANSLATE})`,
//     opacity: 0,
//     from: { transform: "translateX(0)", opacity: OVERLAY_OPACITY }
//   }
// };

export const overlayClass = css`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.darkBlue};
  opacity: 0.4;
  position: fixed;
  top: 0;
  z-index: 2;
`;
