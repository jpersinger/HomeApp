import { map } from "lodash";
import React from "react";
import FormBuilder from "../../../../../ui_components/formHelper";
import { FormElement } from "../../../../../ui_components/formHelper/form.definitions";
import { MealTypes } from "../../../food.definitions";
import { RecipeContainer } from "./components";

export interface GeneralRecipeProps {
  title: string;
  updateTitle: (title: string) => void;
  cookTime: number;
  updateCookTime: (cookTime: number) => void;
  mealType: MealTypes;
  updateMealType: (mealType: MealTypes) => void;
}

const GeneralRecipeInfoDisplay = ({
  title,
  updateTitle,
  cookTime,
  updateCookTime,
  mealType,
  updateMealType
}: GeneralRecipeProps) => {
  const elements: FormElement[] = [
    {
      key: "meal_name",
      header: "Meal Name",
      value: title,
      edit: updateTitle,
      editOnChange: true,
      placeholder: "Meal Name"
    },
    {
      key: "meal_type",
      header: "Meal Type",
      value: mealType,
      options: map(MealTypes, mealType => mealType),
      select: mealType => {
        updateMealType(mealType as MealTypes);
      },
      searchable: true
    },
    {
      key: "cook_time",
      header: "Cook Time",
      subHeader: "in hours",
      value: `${cookTime}`,
      editOnChange: true,
      edit: cookTime => {
        updateCookTime(parseInt(cookTime));
      },
      placeholder: "Cook Time"
    }
  ];

  return (
    <RecipeContainer>
      <FormBuilder elements={elements} />
    </RecipeContainer>
  );
};

export default GeneralRecipeInfoDisplay;
