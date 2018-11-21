import React from "react";
import { connect } from "react-redux";
import {
  Ingredient,
  MeasurementTypes
} from "../../../../../services/food_services/food.definitions";
import {
  updateIngredientAmount,
  updateIngredientMeasurementType,
  updateIngredientName
} from "../../../../../services/redux/actions/food";
import { RootState } from "../../../../../services/redux/reducers";
import NewIngredient from "./NewIngredient";

interface Props {
  ingredients: Ingredient[];
  updateIngredientName: (index: number, name: string) => void;
  updateIngredientAmount: (index: number, amount: number) => void;
  updateIngredientMeasurementType: (
    index: number,
    measurementType: MeasurementTypes
  ) => void;
}

const IngredientsList = ({
  ingredients,
  updateIngredientName,
  updateIngredientAmount,
  updateIngredientMeasurementType
}: Props) => (
  <div>
    {ingredients.map((ingredient, index) => (
      <NewIngredient
        key={index}
        ingredient={ingredient}
        updateName={(name: string) => {
          updateIngredientName(index, name);
        }}
        updateAmount={(amount: number) => {
          updateIngredientAmount(index, amount);
        }}
        updateType={(type: MeasurementTypes) => {
          updateIngredientMeasurementType(index, type);
        }}
      />
    ))}
  </div>
);

export default connect(
  ({
    food: {
      newRecipe: { ingredients }
    }
  }: RootState) => ({
    ingredients
  }),
  {
    updateIngredientName,
    updateIngredientAmount,
    updateIngredientMeasurementType
  }
)(IngredientsList);
