import axios from "axios";
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
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + RECIPE_HASH)
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNewRecipe = (recipe: Recipe) => {
  console.log("sending", recipe);
  axios.post(SERVER_URL + RECIPE_HASH, JSON.stringify(recipe), {
    headers: { "Content-Type": "application/json" }
  });
};
