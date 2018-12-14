import { combineReducers } from "redux";
import budget, { BudgetState } from "./budget";
import food, { FoodState } from "./food";
import home, { HomeState } from "./home";
import personalGoals, { PersonalGoalsState } from "./personalGoals";
import settings, { SettingsState } from "./settings";

export interface RootState {
  home: HomeState;
  food: FoodState;
  budget: BudgetState;
  personalGoals: PersonalGoalsState;
  settings: SettingsState;
}

const rootReducer = combineReducers<RootState, any>({
  home,
  food,
  budget,
  personalGoals,
  settings
});

export default rootReducer;
