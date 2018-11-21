import React from "react";
import GeneralRecipeInfo from "./GeneralRecipeInfo";
import IngredientsList from "./IngredientsList";
import InstructionsList from "./InstructionsList";

const AddRecipeForm = () => {
  return (
    <div>
      <GeneralRecipeInfo />
      <IngredientsList />
      <InstructionsList />
    </div>
  );
};

export default AddRecipeForm;
