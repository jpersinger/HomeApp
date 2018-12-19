import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../../services/redux/actions/food";
import MultiModal, {
  ModalPageProps
} from "../../../ui_components/modal/multiModal";
import { MealTypes, MeasurementTypes, Recipe } from "../food.definitions";
import getGeneralRecipeInfo from "./AddRecipeForm/GeneralRecipeInfo";
import getIngredientsList from "./AddRecipeForm/IngredientsList";
import getInstructionsList from "./AddRecipeForm/InstructionsList";
import { initialState, reducer } from "./reducer";

interface Props {
  open: boolean;
  toggleOpen: () => void;
  addRecipe: (recipe: Recipe) => void;
}

const AddRecipeModal = ({ open, toggleOpen, addRecipe }: Props) => {
  const [pageIndex, setPageIndex] = useState(0);

  const [fullRecipe, dispatch] = useReducer(reducer, initialState);

  const general = getGeneralRecipeInfo({
    goNext: () => {
      setPageIndex(1);
    },
    ...fullRecipe,
    updateTitle: (title: string) => {
      dispatch({ type: "update_title", title });
    },
    updateCookTime: (cookTime: number) => {
      dispatch({ type: "update_cook_time", cookTime });
    },
    updateMealType: (mealType: MealTypes) => {
      dispatch({ type: "update_meal_type", mealType });
    }
  });

  const ingredients = getIngredientsList({
    goBack: () => {
      setPageIndex(0);
    },
    goNext: () => {
      setPageIndex(2);
    },
    ...fullRecipe,
    addIngredient: () => {
      dispatch({ type: "add_ingredient" });
    },
    updateIngredientName: (index: number, name: string) => {
      dispatch({ type: "update_ingredient_name", index, name });
    },
    updateIngredientAmount: (index: number, amount: number) => {
      dispatch({ type: "update_ingredient_amount", index, amount });
    },
    updateIngredientMeasurementType: (
      index: number,
      measurementType: MeasurementTypes
    ) => {
      dispatch({
        type: "update_ingredient_measurement_type",
        index,
        measurementType
      });
    }
  });

  const instructions = getInstructionsList({
    goBack: () => {
      setPageIndex(1);
    },
    save: () => {
      addRecipe(fullRecipe);
      toggleOpen();
    },
    ...fullRecipe,
    addInstruction: () => {
      dispatch({ type: "add_instruction" });
    },
    updateInstruction: (index: number, instruction: string) => {
      dispatch({ type: "update_instruction", index, instruction });
    }
  });

  const pages: ModalPageProps[] = [general, ingredients, instructions];

  return (
    <div>
      {open && (
        <MultiModal close={toggleOpen} pages={pages} pageIndex={pageIndex} />
      )}
    </div>
  );
};

export default connect(
  null,
  { addRecipe }
)(AddRecipeModal);
