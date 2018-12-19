import React from "react";
import Button from "../../../../../ui_components/button";
import theme from "../../../../../ui_components/theme";
import InstructionsListDisplay, {
  InstructionProps
} from "./instructionsListDisplay";
import { areAllInstructionsComplete } from "./services";

interface Props extends InstructionProps {
  goBack: () => void;
  save: () => void;
}

const getInstructionsList = ({
  goBack,
  save,
  instructions,
  addInstruction,
  updateInstruction
}: Props) => ({
  title: "Instructions",
  content: (
    <InstructionsListDisplay
      instructions={instructions}
      addInstruction={addInstruction}
      updateInstruction={updateInstruction}
    />
  ),
  footer: (
    <div style={{ display: "flex", width: "100%" }}>
      <Button onClick={goBack} color={theme.colors.secondary}>
        Back
      </Button>
      <Button
        onClick={save}
        disabled={!areAllInstructionsComplete(instructions)}
        style={{ marginLeft: "1em" }}
      >
        Save
      </Button>
    </div>
  )
});

export default getInstructionsList;
