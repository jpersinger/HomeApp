import React from "react";
import { IconProps } from "../components/icon";

const Delete = ({ size, fill }: IconProps) => (
  <svg
    enableBackground="new 0 0 50 50"
    id="delete"
    version="1.1"
    viewBox="0 0 50 50"
    width={size}
    height={size}
    fill={fill}
  >
    <rect fill="none" height="50" width="50" />
    <path
      d="M19,6V3c0-1.104,0.896-2,2-2  h8c1.104,0,2,0.896,2,2v3"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M40,6l-3.693,41.426  C36.229,48.299,35.469,49,34.608,49H15.391c-0.86,0-1.621-0.701-1.699-1.574L10,6"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <line
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      x1="8"
      x2="42"
      y1="6"
      y2="6"
    />
    <line
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      x1="25"
      x2="25"
      y1="11"
      y2="44"
    />
    <line
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      x1="31"
      x2="31"
      y1="11"
      y2="44"
    />
    <line
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      x1="19"
      x2="19"
      y1="11"
      y2="44"
    />
  </svg>
);

export default Delete;
