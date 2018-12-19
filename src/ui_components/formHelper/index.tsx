import React from "react";
import { Form } from "./form.definitions";
import SingleFormElementDisplay from "./singleFormElement";

const FormBuilder = ({ elements }: Form) => {
  // TODO generic types
  return (
    <React.Fragment>
      {elements.map(element => (
        <SingleFormElementDisplay key={element.key} element={element} />
      ))}
    </React.Fragment>
  );
};

export default FormBuilder;
