import React from "react";
import { IconProps } from "../ui_components/icon";

const EmptyCheckbox = ({ size, fill }: IconProps) => (
  <svg
    enableBackground="new 0 0 100 100"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    <g>
      <g>
        <polygon
          fill={fill}
          points="79.1,41.2 79.1,79.4 21.1,79.4 21.1,22.8 63,22.8 63,20.8 19.1,20.8 19.1,81.4 81.1,81.4     81.1,41.2 79.1,41.2   "
        />
      </g>
    </g>
  </svg>
);

export default EmptyCheckbox;
