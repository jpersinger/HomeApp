import React from "react";
import Button from "../button";
import Icon from "../icon";
import { ListRow, ListRowProps } from "../listRow";
import theme from "../theme";
import { Paragraph1 } from "../typography";
import { CheckboxRowButtonContainer, CheckboxRowContainer } from "./components";

interface Props extends ListRowProps {
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
  extraTextButtons?: ({ text: string; onClick: () => void })[];
}

const CheckboxRow = ({
  selected,
  text,
  subText,
  onClick,
  extraTextButtons,
  disabled,
  styleOverrides
}: Props) => (
  <CheckboxRowContainer
    selected={selected}
    style={styleOverrides}
    onClick={onClick}
    disabled={disabled}
  >
    <ListRow text={text} subText={subText} />
    <CheckboxRowButtonContainer>
      {extraTextButtons &&
        extraTextButtons.map(({ text, onClick }) => (
          <Button
            key={text}
            textOnly
            onClick={event => {
              event.stopPropagation();
              onClick();
            }}
            style={{ marginRight: "0.5em" }}
          >
            <Paragraph1>{text}</Paragraph1>
          </Button>
        ))}
      <Icon
        name={selected ? "filled-checkbox" : "empty-checkbox"}
        fill={selected ? theme.colors.affirmative : "#000000"}
        size={30}
      />
    </CheckboxRowButtonContainer>
  </CheckboxRowContainer>
);

export default CheckboxRow;
