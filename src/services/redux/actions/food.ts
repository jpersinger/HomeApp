import {
  MealTypes,
  MeasurementTypes
} from "../../../pages/food/food.definitions";
import {
  ADD_RECIPE,
  CLEAR_RECIPES,
  TOGGLE_RECIPE,
  UPDATE_INGREDIENT_AMOUNT,
  UPDATE_INGREDIENT_MEASUREMENT_TYPE,
  UPDATE_INGREDIENT_NAME,
  UPDATE_INSTRUCTION,
  UPDATE_NEW_RECIPE_COOK_TIME,
  UPDATE_NEW_RECIPE_MEAL_TYPE,
  UPDATE_NEW_RECIPE_TITLE
} from "../constants";

export const toggleRecipe = (recipeTitle: string) => ({
  type: TOGGLE_RECIPE,
  recipeTitle
});

export const clearRecipes = () => ({
  type: CLEAR_RECIPES
});

export const addRecipe = () => ({
  type: ADD_RECIPE
});

export const updateNewRecipeTitle = (title: string) => ({
  type: UPDATE_NEW_RECIPE_TITLE,
  title
});

export const updateNewRecipeCookTime = (cookTime: number) => ({
  type: UPDATE_NEW_RECIPE_COOK_TIME,
  cookTime
});

export const updateNewRecipeMealType = (mealType: MealTypes) => ({
  type: UPDATE_NEW_RECIPE_MEAL_TYPE,
  mealType
});

export const updateIngredientName = (index: number, name: string) => ({
  type: UPDATE_INGREDIENT_NAME,
  index,
  name
});

export const updateIngredientAmount = (index: number, amount: number) => ({
  type: UPDATE_INGREDIENT_AMOUNT,
  index,
  amount
});

export const updateIngredientMeasurementType = (
  index: number,
  measurementType: MeasurementTypes
) => ({
  type: UPDATE_INGREDIENT_MEASUREMENT_TYPE,
  index,
  measurementType
});

export const updateInstruction = (index: number, instruction: string) => ({
  type: UPDATE_INSTRUCTION,
  index,
  instruction
});
