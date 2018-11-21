import produce from "immer";
import { cloneDeep, pullAt } from "lodash";
import {
  allIngredientsAreComplete,
  allInstructionsAreComplete,
  getCleanNewRecipe
} from "../../food_services";
import { Recipe } from "../../food_services/food.definitions";
import {
  emptyIngredient,
  emptyRecipe,
  recipes
} from "../../food_services/food_services.fixtures";
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

export interface FoodState {
  allRecipes: Recipe[];
  recipeList: string[];

  newRecipe: Recipe;
}

const initialState: FoodState = {
  allRecipes: recipes,
  recipeList: [],
  newRecipe: emptyRecipe
};

export default (state = initialState, action: any) =>
  produce(state, newState => {
    const currentIngredients = cloneDeep(state.newRecipe.ingredients);

    switch (action.type) {
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
        allRecipes.push(getCleanNewRecipe(state.newRecipe));
        newState.allRecipes = allRecipes;
        newState.newRecipe = emptyRecipe;
        break;

      case UPDATE_NEW_RECIPE_TITLE:
        newState.newRecipe.title = action.title;
        break;

      case UPDATE_NEW_RECIPE_COOK_TIME:
        newState.newRecipe.cookTime = action.cookTime;
        break;

      case UPDATE_NEW_RECIPE_MEAL_TYPE:
        newState.newRecipe.mealType = action.mealType;
        break;

      case UPDATE_INGREDIENT_NAME:
        currentIngredients[action.index].name = action.name;
        if (allIngredientsAreComplete(currentIngredients)) {
          currentIngredients.push(emptyIngredient);
        }
        newState.newRecipe.ingredients = currentIngredients;
        break;

      case UPDATE_INGREDIENT_AMOUNT:
        currentIngredients[action.index].amount = action.amount;
        if (allIngredientsAreComplete(currentIngredients)) {
          currentIngredients.push(emptyIngredient);
        }
        newState.newRecipe.ingredients = currentIngredients;
        break;

      case UPDATE_INGREDIENT_MEASUREMENT_TYPE:
        currentIngredients[action.index].measurementType =
          action.measurementType;
        newState.newRecipe.ingredients = currentIngredients;
        break;

      case UPDATE_INSTRUCTION:
        const currentInstructions = cloneDeep(state.newRecipe.instructions);
        currentInstructions[action.index] = action.instruction;
        if (allInstructionsAreComplete(currentInstructions)) {
          currentInstructions.push("");
        }
        newState.newRecipe.instructions = currentInstructions;
        break;
    }
  });
