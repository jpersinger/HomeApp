import React from "react";
import IconButton from "../icon/iconButton";
import theme from "../theme";
import { ToggleFormElement } from "./form.definitions";

const ToggleForm = ({
  header,
  subHeader,
  selected,
  toggle
}: ToggleFormElement) => (
  <React.Fragment>
    <IconButton
      name={selected ? "filled-checkbox" : "empty-checkbox"}
      fill={selected ? theme.colors.affirmative : "#000000"}
      size={30}
      onClick={toggle}
    />
  </React.Fragment>
);

export default ToggleForm;
