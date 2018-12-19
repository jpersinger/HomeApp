import React from "react";
import {
  AddAndSave,
  FormAddButton,
  FormChild,
  FormContainer,
  FormHeader,
  getElementDisplay
} from "./components";
import { FormElement } from "./form.definitions";
import { isFormArrayType, isInlineFormArrayElement } from "./services";

interface Props {
  element: FormElement;
  hasInnerLines?: boolean;
}

const SingleFormElementDisplay = ({ element, hasInnerLines }: Props) => (
  <FormContainer>
    <FormHeader header={element.header} subHeader={element.subHeader} />
    <FormChild hasHeader={!!element.header} hasInnerLines={hasInnerLines}>
      {((): JSX.Element => {
        const display = getElementDisplay(element);
        if (display) {
          return display;
        }

        if (isInlineFormArrayElement(element)) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              {element.elements.map(singleElement => (
                <div key={singleElement.key}>
                  {getElementDisplay(singleElement)}
                </div>
              ))}
            </div>
          );
        }

        if (isFormArrayType(element)) {
          return (
            <React.Fragment>
              {element.elements.map(singleElement => (
                <SingleFormElementDisplay
                  key={singleElement.key}
                  element={singleElement}
                />
              ))}
              {element.add &&
                (element.addType ? (
                  <AddAndSave saveValue={element.add} type={element.addType} />
                ) : (
                  <FormAddButton
                    onClick={() => {
                      element.add && element.add("");
                    }}
                  />
                ))}
            </React.Fragment>
          );
        }

        return <div />;
      })()}
    </FormChild>
  </FormContainer>
);

export default SingleFormElementDisplay;
