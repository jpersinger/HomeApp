import { getRecipes } from ".";
import store from "../redux";
import { setRecipes } from "../redux/actions/food";

class ServerHandler {
  constructor() {
    this.pullServerData();
  }

  intialize() {
    setInterval(() => {
      this.pullServerData();
    }, 60000);
  }

  pullServerData() {
    const recipePromise = getRecipes();
    recipePromise.then(recipes => {
      store.dispatch(setRecipes(recipes));
    });
  }
}

const instance = new ServerHandler();
Object.freeze(instance);

export default instance;
