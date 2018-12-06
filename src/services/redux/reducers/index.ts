import { combineReducers } from "redux";
import budget, { BudgetState } from "./budget";
import food, { FoodState } from "./food";
import home, { HomeState } from "./home";

export interface RootState {
  home: HomeState;
  food: FoodState;
  budget: BudgetState;
}

const rootReducer = combineReducers<RootState, any>({
  home,
  food,
  budget
});

export default rootReducer;
