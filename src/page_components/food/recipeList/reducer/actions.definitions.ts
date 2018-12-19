import { MealTypes, MeasurementTypes } from "../../food.definitions";

export type Action =
  | UpdateTitleAction
  | UpdateMealTypeAction
  | UpdateCookTimeAction
  | AddIngredientAction
  | UpdateIngredientNameAction
  | UpdateIngredientAmountAction
  | UpdateIngredientMeasurementTypeAction
  | AddInstructionAction
  | UpdateInstructionAction;

interface UpdateTitleAction {
  type: "update_title";
  title: string;
}

interface UpdateMealTypeAction {
  type: "update_meal_type";
  mealType: MealTypes;
}

interface UpdateCookTimeAction {
  type: "update_cook_time";
  cookTime: number;
}

interface AddIngredientAction {
  type: "add_ingredient";
}

interface UpdateIngredientNameAction {
  type: "update_ingredient_name";
  index: number;
  name: string;
}

interface UpdateIngredientAmountAction {
  type: "update_ingredient_amount";
  index: number;
  amount: number;
}

interface UpdateIngredientMeasurementTypeAction {
  type: "update_ingredient_measurement_type";
  index: number;
  measurementType: MeasurementTypes;
}

interface AddInstructionAction {
  type: "add_instruction";
}

interface UpdateInstructionAction {
  type: "update_instruction";
  index: number;
  instruction: string;
}
