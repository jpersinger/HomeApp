import React from "react";
import IconButton from "../icon/iconButton";
import theme from "../theme";
import { AddContainer } from "./components";

interface Props {
  onClick: () => void;
}

const AddButton = ({ onClick }: Props) => (
  <AddContainer>
    <IconButton
      name="add"
      size={50}
      onClick={onClick}
      container
      containerFill={theme.colors.primary}
    />
  </AddContainer>
);

export default AddButton;
