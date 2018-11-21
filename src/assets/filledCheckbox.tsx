import React from "react";
import { IconProps } from "../components/icon";

const FilledCheckbox = ({ size, fill }: IconProps) => (
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
      <polygon
        fill={fill}
        points="77.8,26.1 47.1,56.8 34.2,43 32.9,44.2 47.1,59.2 47.4,58.9 47.4,58.9 79,27.3  "
      />
    </g>
  </svg>
);

export default FilledCheckbox;
