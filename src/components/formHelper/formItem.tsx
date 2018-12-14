import React, { useState } from "react";
import Button from "../button";
import CheckboxRow from "../checkboxRow";
import IconButton from "../icon/iconButton";
import theme from "../theme";
import { Paragraph1 } from "../typography";
import { AddAndSave } from "./components";

export interface FormItemProps {
  children: string;
  edit?: (newValue: string) => void;
  toggle?: () => void;
  onDelete?: () => void;
  row?: boolean;
  selected: boolean;
}

const FormItem = ({
  edit,
  toggle,
  onDelete,
  row,
  selected,
  children
}: FormItemProps) => {
  const [editEnabled, setEditEnabled] = useState(false);

  if (editEnabled && edit) {
    return (
      <AddAndSave
        currentValue={children}
        saveValue={value => {
          edit(value);
          setEditEnabled(false);
        }}
      />
    );
  }

  if (row && toggle) {
    return <CheckboxRow text={children} selected={selected} onClick={toggle} />;
  }

  return (
    <div>
      {children && (
        <Paragraph1 style={{ paddingRight: "0.5em" }}>{children}</Paragraph1>
      )}
      {edit && (
        <Button
          textOnly
          fontSize="0.8em"
          onClick={() => {
            setEditEnabled(true);
          }}
        >
          edit
        </Button>
      )}
      {toggle && (
        <IconButton
          name={selected ? "filled-checkbox" : "empty-checkbox"}
          fill={selected ? theme.colors.affirmative : "#000000"}
          size={30}
          onClick={toggle}
        />
      )}
      {onDelete && (
        <Button textOnly fontSize="0.8em" onClick={onDelete}>
          delete
        </Button>
      )}
    </div>
  );
};

export default FormItem;
