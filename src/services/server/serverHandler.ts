import { setBudgetInStore } from "./budget";
import { setRecipesInStore } from "./recipes";

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
    setRecipesInStore();
    setBudgetInStore();
  }
}

const instance = new ServerHandler();
Object.freeze(instance);

export default instance;
