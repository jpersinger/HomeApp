import React, { useState } from "react";
import { Input } from "../../inputs";
import {
  FormDeleteButton,
  FormEditButton,
  FormSaveButton,
  FormTextArea,
  PlaceholderText
} from "../components";
import { InputFormElement, TextAreaFormElement } from "../form.definitions";
import { isTextAreaType } from "../services";

const OnSaveInputForm = (element: InputFormElement | TextAreaFormElement) => {
  const { value, placeholder, edit, onDelete } = element;

  const [editMode, setEditMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(value || "");

  return (
    <React.Fragment>
      {editMode ? (
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: "0.5em", width: "100%" }}>
            {isTextAreaType(element) ? (
              <FormTextArea />
            ) : (
              <Input
                value={currentValue || value}
                placeholder={placeholder}
                onChange={({ target: { value } }) => {
                  setCurrentValue(value);
                }}
              />
            )}
          </div>
          {editMode && (
            <FormSaveButton
              onClick={() => {
                edit(currentValue);
                setEditMode(false);
              }}
            />
          )}
        </div>
      ) : (
        <div>
          {value ? value : <PlaceholderText>{placeholder}</PlaceholderText>}
          <FormEditButton
            padding
            onClick={() => {
              setEditMode(true);
            }}
          />
          {onDelete && <FormDeleteButton padding onClick={onDelete} />}
        </div>
      )}
    </React.Fragment>
  );
};

export default OnSaveInputForm;
