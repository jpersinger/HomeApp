import React from "react";
import Icon from "../icon";
import { ListRow, ListRowProps } from "../listRow";
import theme from "../theme";
import { CheckboxRowContainer } from "./components";

interface Props extends ListRowProps {
  selected: boolean;
  onClick: () => void;
}

const CheckboxRow = ({
  selected,
  text,
  subText,
  onClick,
  styleOverrides
}: Props) => (
  <CheckboxRowContainer
    selected={selected}
    style={styleOverrides}
    onClick={onClick}
  >
    <ListRow text={text} subText={subText} />
    <Icon
      name={selected ? "filled-checkbox" : "empty-checkbox"}
      fill={selected ? theme.colors.affirmative : "#000000"}
      size={30}
      styleOverrides={{ paddingRight: "1em" }}
    />
  </CheckboxRowContainer>
);

export default CheckboxRow;
