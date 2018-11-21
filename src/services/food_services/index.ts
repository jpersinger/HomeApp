import { cloneDeep, isEmpty, remove, some } from "lodash";
import { Ingredient, Recipe } from "../../pages/food/food.definitions";

export const allIngredientsAreComplete = (ingredients: Ingredient[]): boolean =>
  !some(ingredients, ingredient => isEmptyIngredient(ingredient));

export const isEmptyIngredient = ({ name, amount }: Ingredient): boolean =>
  isEmpty(name) || amount === 0;

export const allInstructionsAreComplete = (instructions: string[]): boolean =>
  !some(instructions, instruction => isEmpty(instruction));

export const getCleanNewRecipe = (recipe: Recipe): Recipe => {
  const cleanRecipe = cloneDeep(recipe);
  remove(cleanRecipe.ingredients, ingredient => isEmptyIngredient(ingredient));
  remove(cleanRecipe.instructions, instruction => isEmpty(instruction));
  return cleanRecipe;
};
