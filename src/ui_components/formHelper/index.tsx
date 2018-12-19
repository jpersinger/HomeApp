import React from "react";
import { Form } from "./form.definitions";
import SingleFormElementDisplay from "./singleFormElement";

const FormBuilder = ({ elements, hasInnerLines }: Form) => {
  // TODO generic types
  return (
    <React.Fragment>
      {elements.map(element => (
        <SingleFormElementDisplay
          key={element.key}
          element={element}
          hasInnerLines={hasInnerLines}
        />
      ))}
    </React.Fragment>
  );
};

export default FormBuilder;
