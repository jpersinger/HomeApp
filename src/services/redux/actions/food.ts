import { Recipe } from "../../../page_components/food/food.definitions";
import {
  ADD_RECIPE,
  CLEAR_RECIPES,
  SET_RECIPES,
  TOGGLE_RECIPE
} from "../constants";

export const toggleRecipe = (recipeTitle: string) => ({
  type: TOGGLE_RECIPE,
  recipeTitle
});

export const clearRecipes = () => ({
  type: CLEAR_RECIPES
});

export const addRecipe = (recipe: Recipe) => ({
  type: ADD_RECIPE,
  recipe
});

export const setRecipes = (recipes: Recipe[]) => ({
  type: SET_RECIPES,
  recipes
});
