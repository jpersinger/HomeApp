import { setBudgetInStore } from "./budget";
import { setRecipesInStore } from "./recipes";

class ServerHandler {
  constructor() {
    this.pullServerData();
  }

  intialize() {
    setInterval(() => {
      // this.pullServerData();
      setRecipesInStore();
    }, 60000);

    setInterval(() => {
      setBudgetInStore();
    }, 20000);
  }

  pullServerData() {
    setRecipesInStore();
    setBudgetInStore();
  }
}

const instance = new ServerHandler();
Object.freeze(instance);

export default instance;
