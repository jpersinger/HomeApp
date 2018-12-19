import React, { useState } from "react";
import styled from "react-emotion";
import Button from "../button";
import { Input, TextArea } from "../inputs";
import theme from "../theme";
import { Paragraph1, Paragraph2 } from "../typography";
import DropDownForm from "./dropDownForm";
import { BaseFormElement, FormElement } from "./form.definitions";
import InputForm from "./inputForm";
import { isDropDownType, isInputType, isToggleType } from "./services";
import ToggleForm from "./toggleForm";

export const FormContainer = styled("div")`
  min-height: 4em;
  display: grid;
  grid-template-columns: 30% 65%;
  grid-column-gap: 5%;
  align-items: center;
`;

const FormHeaderRow = styled("div")<{ hasSubHeader: boolean }>(
  ({ hasSubHeader }) => `
  display: grid;
  grid-template-rows: ${hasSubHeader ? "60% 40%" : "100%"};
  text-align: right;
`
);

export const FormHeader = ({ header, subHeader }: Partial<BaseFormElement>) => (
  <React.Fragment>
    {header && (
      <FormHeaderRow hasSubHeader={!!subHeader}>
        <Paragraph1>{header}</Paragraph1>
        <Paragraph2>{subHeader}</Paragraph2>
      </FormHeaderRow>
    )}
  </React.Fragment>
);

export const FormChild = styled("div")<{ hasHeader: boolean }>(
  ({ hasHeader }) => `
    grid-column: ${hasHeader ? "" : "1/3"};
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top: ${hasHeader ? `1px solid ${theme.colors.darkGray}` : ""}
`
);

interface FormButtonProps {
  onClick: () => void;
  padding?: boolean;
}

export const PlaceholderText = styled("span")`
  font-style: italic;
  color: ${theme.colors.darkGray};
`;

const FormButton = ({
  onClick,
  padding,
  type
}: FormButtonProps & { type: "save" | "edit" | "delete" | "add" }) => (
  <Button
    textOnly
    textColor={
      type === "save" || type === "add"
        ? theme.colors.affirmative
        : type === "edit"
        ? theme.colors.secondary
        : type === "delete"
        ? theme.colors.negative
        : ""
    }
    onClick={onClick}
    style={{ marginLeft: padding ? "0.5em" : "" }}
  >
    {type}
  </Button>
);

export const FormSaveButton = (props: FormButtonProps) => (
  <FormButton {...props} type="save" />
);

export const FormEditButton = (props: FormButtonProps) => (
  <FormButton {...props} type="edit" />
);

export const FormDeleteButton = (props: FormButtonProps) => (
  <FormButton {...props} type="delete" />
);

export const FormAddButton = (props: FormButtonProps) => (
  <FormButton {...props} type="add" />
);

export const AddAndSave = ({
  saveValue,
  type
}: {
  saveValue: (newValue: string) => void;
  type?: "input" | "textarea";
}) => {
  const [newValue, setNewValue] = useState("");
  const [addEnabled, setAddEnabled] = useState(false);

  return (
    <React.Fragment>
      {addEnabled ? (
        <div>
          {type === "input" ? (
            <Input
              value={newValue}
              onChange={event => {
                setNewValue(event.target.value);
              }}
            />
          ) : (
            <FormTextArea />
          )}
          <FormSaveButton
            onClick={() => {
              if (newValue) {
                saveValue(newValue);
                setNewValue("");
              }
              setAddEnabled(false);
            }}
          />
        </div>
      ) : (
        <div>
          <FormAddButton
            onClick={() => {
              setAddEnabled(true);
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export const FormTextArea = ({
  onChange,
  placeholder
}: {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) => (
  <TextArea
    style={{ resize: "none", width: "100%", borderRadius: 0, maxHeight: "5em" }}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export const getElementDisplay = (element: FormElement): JSX.Element | null => {
  if (isInputType(element)) {
    return <InputForm key={element.key} {...element} />;
  }

  if (isToggleType(element)) {
    return <ToggleForm key={element.key} {...element} />;
  }

  if (isDropDownType(element)) {
    return <DropDownForm key={element.key} {...element} />;
  }

  return null;
};
