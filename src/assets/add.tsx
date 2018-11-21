import React from "react";
import { IconProps } from "../components/icon";

const Add = ({ size, fill }: IconProps) => (
  <svg
    enableBackground="new 0 0 40 40"
    id="add"
    version="1.1"
    viewBox="0 0 40 40"
    width={size}
    height={size}
    fill={fill}
  >
    <g>
      <path d="M29,20c0,0.6-0.5,1-1,1h-7v7c0,0.6-0.5,1-1,1s-1-0.4-1-1v-7h-7c-0.5,0-1-0.4-1-1c0-0.6,0.5-1,1-1h7v-7c0-0.6,0.5-1,1-1   s1,0.4,1,1v7h7C28.5,19,29,19.4,29,20z" />
    </g>
  </svg>
);

export default Add;
