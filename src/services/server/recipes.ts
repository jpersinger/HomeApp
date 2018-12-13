import { sendGetRequest, sendPostRequest } from ".";
import { Recipe } from "../food_services/food.definitions";
import store from "../redux";
import { setRecipes } from "../redux/actions/food";
import { RECIPE_HASH, SERVER_URL } from "./constants";

export const setRecipesInStore = () => {
  getRecipes().then(recipes => {
    store.dispatch(setRecipes(recipes));
  });
};

const getRecipes = (): Promise<Recipe[]> =>
  sendGetRequest<Recipe[]>(RECIPE_HASH);

export const sendNewRecipe = (recipe: Recipe) => {
  sendPostRequest(SERVER_URL + RECIPE_HASH, JSON.stringify(recipe));
};
