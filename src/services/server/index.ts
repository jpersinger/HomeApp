import axios from "axios";
import { Recipe } from "../food_services/food.definitions";

const SERVER_URL = "https://kisby-home-app-server.herokuapp.com";
// const SERVER_URL = "http://localhost:3001";

const RECIPE_HASH = "/recipes";

export const getRecipes = (): Promise<Recipe[]> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + RECIPE_HASH)
      .then(data => {
        resolve(data.data.recipes);
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
