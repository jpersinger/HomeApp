import React from "react";
import { InputFormElement } from "../form.definitions";
import OnChangeInputForm from "./onChangeInputForm";
import OnSaveInputForm from "./onSaveInputForm";

const InputForm = (props: InputFormElement) => {
  const { header, subHeader, editOnChange } = props;

  return (
    <React.Fragment>
      {editOnChange ? (
        <OnChangeInputForm {...props} />
      ) : (
        <OnSaveInputForm {...props} />
      )}
    </React.Fragment>
  );
};

export default InputForm;
