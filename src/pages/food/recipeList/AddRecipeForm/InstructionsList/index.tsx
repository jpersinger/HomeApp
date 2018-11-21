import React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { updateInstruction } from "../../../../../services/redux/actions/food";
import { RootState } from "../../../../../services/redux/reducers";
import NewInstruction from "./NewInstruction";

const InstructionsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

interface Props {
  instructions: string[];
  updateInstruction: (index: number, instruction: string) => void;
}

const InstructionsList = ({ instructions, updateInstruction }: Props) => (
  <InstructionsContainer>
    {instructions.map((instruction, index) => (
      <NewInstruction
        key={index}
        instruction={instruction}
        updateInstruction={(instruction: string) => {
          updateInstruction(index, instruction);
        }}
      />
    ))}
  </InstructionsContainer>
);

export default connect(
  ({
    food: {
      newRecipe: { instructions }
    }
  }: RootState) => ({ instructions }),
  { updateInstruction }
)(InstructionsList);
