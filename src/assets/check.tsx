import React from "react";
import { IconProps } from "../ui_components/icon";

const Check = ({ size, fill }: IconProps) => (
  <svg
    enableBackground="new 0 0 100 100"
    id="check"
    version="1.1"
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    <polygon
      fill={fill}
      points="77.6,29.5 37.7,69.5 20.9,51.5 19.3,53.1 37.7,72.7 38.1,72.2 38.1,72.3 79.3,31.2 "
    />
  </svg>
);

export default Check;
