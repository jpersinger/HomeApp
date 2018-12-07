import React, { useState } from "react";
import { isArray } from "util";
import Button from "../button";
import IconButton from "../icon/iconButton";
import theme from "../theme";
import { Paragraph1, Paragraph3 } from "../typography";
import {
  AddAndSave,
  FormChildrenContainer,
  FormContainer,
  headerItem
} from "./components";
import FormItem from "./formItem";

interface Props {
  header: string;
  subHeader?: string;
  values: any | any[];
  edit?: (newValue: string) => void;
  onDelete?: (value: any) => void;
  toggle?: () => void;
  add?: (newValue: string) => void;
  discludeFirstFromEditingOptions?: boolean;
}

const FormHelper = (props: Props) => {
  const {
    header,
    subHeader,
    values,
    toggle,
    add,
    edit,
    onDelete,
    discludeFirstFromEditingOptions
  } = props;

  const [addEnabled, setAddEnabled] = useState(false);

  return (
    <FormContainer hasSubHeader={!!subHeader}>
      <Paragraph1 style={{ ...headerItem, alignSelf: "center" }}>
        {header}
      </Paragraph1>
      <Paragraph3 style={{ ...headerItem, gridRow: 2 }}>{subHeader}</Paragraph3>
      <div />
      <FormChildrenContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {!toggle ? (
            isArray(values) ? (
              values.map((value, index) => (
                <FormItem
                  key={value}
                  {...props}
                  edit={
                    edit && (!discludeFirstFromEditingOptions || !!index)
                      ? edit
                      : undefined
                  }
                  onDelete={
                    onDelete && (!discludeFirstFromEditingOptions || !!index)
                      ? () => {
                          onDelete(value);
                        }
                      : undefined
                  }
                >
                  {value}
                </FormItem>
              ))
            ) : (
              <FormItem
                {...props}
                onDelete={
                  onDelete
                    ? () => {
                        onDelete(values);
                      }
                    : undefined
                }
              >
                {values}
              </FormItem>
            )
          ) : (
            <IconButton
              name={values ? "filled-checkbox" : "empty-checkbox"}
              fill={values ? theme.colors.affirmative : "#000000"}
              size={30}
              onClick={toggle}
            />
          )}
          {add &&
            (addEnabled ? (
              <AddAndSave
                currentValue=""
                saveValue={value => {
                  add(value);
                  setAddEnabled(false);
                }}
              />
            ) : (
              <div>
                <Button
                  textOnly
                  fontSize="0.8em"
                  textColor={theme.colors.primary}
                  onClick={() => {
                    setAddEnabled(true);
                  }}
                >
                  add
                </Button>
              </div>
            ))}
        </div>
      </FormChildrenContainer>
    </FormContainer>
  );
};

export default FormHelper;
