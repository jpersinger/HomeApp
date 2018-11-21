import { combineReducers } from "redux";
import food, { FoodState } from "./food";

export interface RootState {
  food: FoodState;
}

const rootReducer = combineReducers<RootState, any>({
  food
});

export default rootReducer;
