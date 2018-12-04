import { combineReducers } from "redux";
import budget, { BudgetState } from "./budget";
import food, { FoodState } from "./food";

export interface RootState {
  food: FoodState;
  budget: BudgetState;
}

const rootReducer = combineReducers<RootState, any>({
  food,
  budget
});

export default rootReducer;
