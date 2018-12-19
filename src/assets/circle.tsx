import React from "react";
import { IconProps } from "../ui_components/icon";
import theme from "../ui_components/theme";

const Circle = ({ size, fill, percentComplete = 100, text }: IconProps) => {
  const childSize = size - 10;
  const radius = childSize / 2 - 3;
  const circum = Math.PI * radius * 2;
  const fillAmount = (circum * percentComplete) / 100;

  return (
    <div
      style={{
        transform: "rotate(-90deg)",
        height: size,
        width: size
      }}
    >
      <svg id="circle" width={size} height={size}>
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeWidth="3"
          stroke={theme.colors.gray}
        />
        <circle
          id="bar"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeDasharray={circum}
          strokeDashoffset={`${circum - fillAmount}`}
          strokeWidth="10"
          stroke={fill}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Circle;
