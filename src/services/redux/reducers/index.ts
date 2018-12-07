import { combineReducers } from "redux";
import budget, { BudgetState } from "./budget";
import food, { FoodState } from "./food";
import home, { HomeState } from "./home";
import settings, { SettingsState } from "./settings";

export interface RootState {
  home: HomeState;
  food: FoodState;
  budget: BudgetState;
  settings: SettingsState;
}

const rootReducer = combineReducers<RootState, any>({
  home,
  food,
  budget,
  settings
});

export default rootReducer;
