import { castArray, isBoolean } from "lodash";
import React, { useState } from "react";
import Button from "../button";
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
  keys?: string[];
  selectedValues?: boolean[];
}

const FormHelper = (props: Props) => {
  const {
    header,
    subHeader,
    values,
    add,
    edit,
    onDelete,
    discludeFirstFromEditingOptions,
    keys,
    selectedValues
  } = props;

  const [addEnabled, setAddEnabled] = useState(false);

  const arr = castArray(values);

  return (
    <FormContainer hasSubHeader={!!subHeader}>
      <Paragraph1 style={{ ...headerItem, alignSelf: "center" }}>
        {header}
      </Paragraph1>
      <Paragraph3 style={{ ...headerItem, gridRow: 2 }}>{subHeader}</Paragraph3>
      <div />
      <FormChildrenContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {arr.map((value, index) => (
            <FormItem
              key={keys ? keys[index] : value}
              {...props}
              selected={selectedValues ? selectedValues[index] : value}
              row={values.length > 1}
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
              {isBoolean(value) ? "" : value}
            </FormItem>
          ))}
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
