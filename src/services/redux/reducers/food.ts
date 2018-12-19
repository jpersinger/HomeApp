import produce from "immer";
import { cloneDeep, pullAt } from "lodash";
import { Recipe } from "../../../page_components/food/food.definitions";
import { getCleanNewRecipe } from "../../../page_components/food/services";
import { sendNewRecipe } from "../../server/recipes";
import {
  ADD_RECIPE,
  CLEAR_RECIPES,
  SET_RECIPES,
  TOGGLE_RECIPE
} from "../constants";

export interface FoodState {
  allRecipes: Recipe[];
  recipeList: string[];
}

const initialState: FoodState = {
  allRecipes: [],
  recipeList: []
};

export default (state = initialState, action: any) =>
  produce(state, newState => {
    switch (action.type) {
      case SET_RECIPES:
        newState.allRecipes = action.recipes;
        break;

      case TOGGLE_RECIPE:
        const index = state.recipeList.indexOf(action.recipeTitle);
        const selectedRecipes = cloneDeep(state.recipeList);
        if (index === -1) {
          selectedRecipes.push(action.recipeTitle);
        } else {
          pullAt(selectedRecipes, index);
        }
        newState.recipeList = selectedRecipes;
        break;

      case CLEAR_RECIPES:
        newState.recipeList = [];
        break;

      case ADD_RECIPE:
        const allRecipes = cloneDeep(state.allRecipes);
        const newRecipe = getCleanNewRecipe(action.recipe);
        sendNewRecipe(newRecipe);
        allRecipes.push(newRecipe);
        newState.allRecipes = allRecipes;
        break;
    }
  });
