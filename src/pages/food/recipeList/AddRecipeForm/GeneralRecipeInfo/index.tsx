import { map } from "lodash";
import React from "react";
import { connect } from "react-redux";
import DropDown from "../../../../../components/dropdown";
import { Input } from "../../../../../components/inputs";
import { MealTypes } from "../../../../../services/food_services/food.definitions";
import {
  updateNewRecipeCookTime,
  updateNewRecipeMealType,
  updateNewRecipeTitle
} from "../../../../../services/redux/actions/food";
import { RootState } from "../../../../../services/redux/reducers";

interface Props {
  title: string;
  updateTitle: (title: string) => void;
  cookTime: number;
  updateCookTime: (cookTime: number) => void;
  mealType: MealTypes;
  updateMealType: (mealType: MealTypes) => void;
}

const GeneralRecipeInfo = ({
  title,
  updateTitle,
  cookTime,
  updateCookTime,
  mealType,
  updateMealType
}: Props) => (
  <div>
    <Input
      placeholder="Meal Name"
      value={title}
      onChange={event => {
        updateTitle(event.target.value);
      }}
    />
    <Input
      type="number"
      placeholder="Cook Time (hours)"
      value={cookTime || ""}
      onChange={event => {
        updateCookTime(parseInt(event.target.value));
      }}
    />
    <DropDown
      itemList={map(MealTypes, mealType => mealType)}
      selectedItem={mealType}
      selectItem={(mealType: string) => {
        updateMealType(mealType as MealTypes);
      }}
    />
  </div>
);

export default connect(
  ({
    food: {
      newRecipe: { title, cookTime, mealType }
    }
  }: RootState) => ({
    title,
    cookTime,
    mealType
  }),
  {
    updateTitle: updateNewRecipeTitle,
    updateCookTime: updateNewRecipeCookTime,
    updateMealType: updateNewRecipeMealType
  }
)(GeneralRecipeInfo);
