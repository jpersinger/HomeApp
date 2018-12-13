import React from "react";
import { Link } from "react-router-dom";
import { PATH_MAP } from "../constants";
import { linkStyles } from "./components";

interface Props {
  path: PATH_MAP;
  toggleOpen: (open: boolean) => void;
}

const LinkItem = ({ path, toggleOpen }: Props) => (
  <Link
    className={linkStyles}
    to={path}
    onClick={() => {
      toggleOpen(false);
    }}
  >
    {(path || "home").toUpperCase()}
  </Link>
);

export default LinkItem;
