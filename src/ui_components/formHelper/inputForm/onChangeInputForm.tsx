import React from "react";
import { Input } from "../../inputs";
import { FormTextArea } from "../components";
import { InputFormElement, TextAreaFormElement } from "../form.definitions";
import { isTextAreaType } from "../services";

const OnChangeInputForm = (element: InputFormElement | TextAreaFormElement) => (
  <React.Fragment>
    {isTextAreaType(element) ? (
      <FormTextArea
        placeholder={element.placeholder}
        onChange={({ target: { value } }) => {
          element.edit(value);
        }}
      />
    ) : (
      <Input
        value={element.value}
        type={element.isNumericType ? "number" : "text"}
        placeholder={element.placeholder}
        onChange={({ target: { value } }) => {
          element.edit(value);
        }}
      />
    )}
  </React.Fragment>
);

export default OnChangeInputForm;
