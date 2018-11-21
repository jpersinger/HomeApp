import React from "react";
import { IconProps } from "../components/icon";

const ListMenu = ({ size, fill }: IconProps) => (
  <svg
    enableBackground="new 0 0 100 100"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    <g>
      <polyline
        fill={fill}
        points="20.1,39.3 80.1,39.3 80.1,37.3 20.1,37.3  "
      />
      <polyline
        fill={fill}
        points="20.1,53.8 80.1,53.8 80.1,51.8 20.1,51.8  "
      />
      <polyline
        fill={fill}
        points="20.1,68.3 80.1,68.3 80.1,66.3 20.1,66.3  "
      />
    </g>
  </svg>
);

export default ListMenu;
