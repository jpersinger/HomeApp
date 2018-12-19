import { cloneDeep } from "lodash";
import { Ingredient, MealTypes, Recipe } from "../../food.definitions";
import { emptyIngredient } from "../../foodServices.fixtures";
import { Action } from "./actions.definitions";

const getUpdatedIngredients = (
  ingredients: Ingredient[],
  index: number,
  field: Partial<Ingredient>
): Ingredient[] => {
  const ingredientsClone = cloneDeep(ingredients);
  ingredientsClone[index] = { ...ingredientsClone[index], ...field };
  return ingredientsClone;
};

export const initialState: Recipe = {
  title: "",
  mealType: MealTypes.breakfast,
  cookTime: 0,
  ingredients: [emptyIngredient],
  instructions: [""]
};

export const reducer = (state: Recipe, action: Action): Recipe => {
  switch (action.type) {
    // GENERAL
    case "update_title":
      return { ...state, title: action.title };
    case "update_meal_type":
      return { ...state, mealType: action.mealType };
    case "update_cook_time":
      return { ...state, cookTime: action.cookTime };

    // INGREDIENTS
    case "add_ingredient":
      return {
        ...state,
        ingredients: [...state.ingredients, { ...emptyIngredient }]
      };
    case "update_ingredient_name":
      return {
        ...state,
        ingredients: getUpdatedIngredients(state.ingredients, action.index, {
          name: action.name
        })
      };
    case "update_ingredient_amount":
      return {
        ...state,
        ingredients: getUpdatedIngredients(state.ingredients, action.index, {
          amount: action.amount
        })
      };
    case "update_ingredient_measurement_type":
      return {
        ...state,
        ingredients: getUpdatedIngredients(state.ingredients, action.index, {
          measurementType: action.measurementType
        })
      };

    // INSTRUCTIONS
    case "add_instruction":
      return { ...state, instructions: [...state.instructions, ""] };
    case "update_instruction":
      const instructionsClone = cloneDeep(state.instructions);
      instructionsClone[action.index] = action.instruction;
      return { ...state, instructions: instructionsClone };

    default:
      return state;
  }
};
