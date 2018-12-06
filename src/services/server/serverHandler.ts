import { setBudgetInStore } from "./budget";
import { setMessagesInStore } from "./home";
import { setRecipesInStore } from "./recipes";

class ServerHandler {
  constructor() {
    setMessagesInStore();
    setRecipesInStore();
    setBudgetInStore();
  }

  intialize() {
    setInterval(() => {
      setMessagesInStore();
    }, 10000);

    setInterval(() => {
      setRecipesInStore();
    }, 60000);

    setInterval(() => {
      setBudgetInStore();
    }, 20000);
  }
}

const instance = new ServerHandler();
Object.freeze(instance);

export default instance;
