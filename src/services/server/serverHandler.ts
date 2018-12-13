import { setBudgetInStore } from "./budget";
import { setMessagesInStore } from "./home";
import { setPersonalGoalsInStore } from "./personalGoals";
import { setRecipesInStore } from "./recipes";

class ServerHandler {
  private _userData: { id: string } = { id: "" };

  initialize() {
    setMessagesInStore();
    setRecipesInStore();
    setBudgetInStore();
    setPersonalGoalsInStore(this.userId);

    setInterval(() => {
      setMessagesInStore();
    }, 10000);

    setInterval(() => {
      setRecipesInStore();
      if (this.userId) {
        setPersonalGoalsInStore(this._userData.id);
      }
    }, 60000);

    setInterval(() => {
      setBudgetInStore();
    }, 20000);
  }

  get userId() {
    return this._userData.id;
  }

  set userId(id: string) {
    this._userData.id = id;
  }
}

const instance = new ServerHandler();
Object.freeze(instance);

export default instance;
