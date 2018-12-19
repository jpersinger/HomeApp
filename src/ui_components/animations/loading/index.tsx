import { range } from "lodash";
import React, { useState } from "react";
import { animated, useKeyframes } from "react-spring/hooks";
import theme from "../../theme";
import { Dot } from "./components";

const dots = range(3);
const interp = (i: number) => (r: number) =>
  `translate3d(0, ${4 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const useHeightScript = useKeyframes.spring(async (next: any) => {
  while (1)
    await next({
      radians: 2 * Math.PI,
      from: { radians: 0 },
      config: { duration: 3500 },
      reset: true
    });
});

interface Props {
  color?: string;
  colorOptions?: string[];
  size?: number;
}

const Loading = ({
  color = theme.colors.primaryDark,
  colorOptions = [],
  size = 30
}: Props) => {
  const props = useHeightScript();

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [interval, setIntervalValue] = useState<any>(null);

  if (!interval) {
    const i = setInterval(() => {
      setCurrentColorIndex(currentColorIndex =>
        currentColorIndex === colorOptions.length - 1
          ? 0
          : currentColorIndex + 1
      );
    }, 3000);
    setIntervalValue(i);
  }

  return (
    <React.Fragment>
      {props.radians ? (
        dots.map(i => (
          <animated.div
            key={i}
            style={{ transform: props.radians.interpolate(interp(i)) }}
          >
            <Dot
              size={size}
              color={
                colorOptions.length ? colorOptions[currentColorIndex] : color
              }
            />
          </animated.div>
        ))
      ) : (
        <div />
      )}
    </React.Fragment>
  );
};

export default Loading;
