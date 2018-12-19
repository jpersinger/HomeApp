import React from "react";
import FormBuilder from "../../../../../ui_components/formHelper";
import {
  FormArrayElement,
  TextAreaFormElement
} from "../../../../../ui_components/formHelper/form.definitions";
import { areAllInstructionsComplete } from "./services";

export interface InstructionProps {
  instructions: string[];
  addInstruction: () => void;
  updateInstruction: (index: number, instruction: string) => void;
}

const InstructionsListDisplay = ({
  instructions,
  addInstruction,
  updateInstruction
}: InstructionProps) => {
  const instructionMap: TextAreaFormElement[] = instructions.map(
    (instruction, index) => ({
      key: `instruction_${index}`,
      textarea: true,
      value: instruction,
      placeholder: "",
      edit: (newInstruction: string) => {
        updateInstruction(index, newInstruction);
      },
      editOnChange: true
    })
  );

  const elements: FormArrayElement<TextAreaFormElement> = {
    key: "instructions_list",
    elements: instructionMap,
    add: areAllInstructionsComplete(instructions) ? addInstruction : undefined
  };

  return (
    <div style={{ padding: "1em" }}>
      <FormBuilder elements={[elements]} />
    </div>
  );
};

export default InstructionsListDisplay;
