import React, { useState } from "react";
import Button from "../button";
import { Paragraph1 } from "../typography";
import { AddAndSave } from "./components";

export interface FormItemProps {
  children: string;
  edit?: (newValue: string) => void;
  onDelete?: () => void;
}

const FormItem = ({ edit, onDelete, children }: FormItemProps) => {
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

  return (
    <div>
      <Paragraph1 style={{ paddingRight: "0.5em" }}>{children}</Paragraph1>
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
      {onDelete && (
        <Button textOnly fontSize="0.8em" onClick={onDelete}>
          delete
        </Button>
      )}
    </div>
  );
};

export default FormItem;
