import React from "react";
import { TextArea } from "../../../../../components/inputs";

interface Props {
  instruction: string;
  updateInstruction: (instruction: string) => void;
}

const NewInstruction = ({ instruction, updateInstruction }: Props) => {
  return (
    <TextArea
      value={instruction}
      style={{ margin: "1em 0" }}
      onChange={event => {
        updateInstruction(event.target.value);
      }}
    />
  );
};

export default NewInstruction;
