import { map } from "lodash";
import React from "react";
import FormBuilder from "../../../../../ui_components/formHelper";
import {
  DropDownFormElement,
  FormArrayElement,
  InlineFormArrayElement,
  InputFormElement
} from "../../../../../ui_components/formHelper/form.definitions";
import { Ingredient, MeasurementTypes } from "../../../food.definitions";
import { ingredientOptions } from "../../../foodServices.fixtures";
import { areAllIngredientsComplete } from "../../../services";

export interface IngredientProps {
  ingredients: Ingredient[];
  addIngredient: () => void;
  updateIngredientName: (index: number, name: string) => void;
  updateIngredientAmount: (index: number, amount: number) => void;
  updateIngredientMeasurementType: (
    index: number,
    measurementType: MeasurementTypes
  ) => void;
}

const IngredientDisplay = ({
  ingredients,
  addIngredient,
  updateIngredientName,
  updateIngredientAmount,
  updateIngredientMeasurementType
}: IngredientProps) => {
  const ingredientMap: InlineFormArrayElement[] = ingredients.map(
    (ingredient, index) => {
      const name: DropDownFormElement = {
        key: `${index}_ingredient_name`,
        options: ingredientOptions,
        select: name => {
          updateIngredientName(index, name);
        },
        value: ingredient.name
      };

      const amount: InputFormElement = {
        key: `${index}_ingredient_amount`,
        placeholder: "Amount",
        edit: amount => {
          updateIngredientAmount(index, parseInt(amount));
        },
        value: ingredient.amount + "",
        editOnChange: true
      };

      const measurementType: DropDownFormElement = {
        key: `${index}_ingredient_amount_type`,
        options: map(MeasurementTypes, type => type),
        select: measurementType => {
          updateIngredientMeasurementType(
            index,
            measurementType as MeasurementTypes
          );
        },
        value: ingredient.measurementType
      };

      return {
        elements: [name, amount, measurementType],
        inline: true,
        key: `${index}_ingredient`
      };
    }
  );

  const form: FormArrayElement<InlineFormArrayElement> = {
    key: "ingredients_list",
    elements: ingredientMap,
    add: areAllIngredientsComplete(ingredients) ? addIngredient : undefined
  };

  return <FormBuilder elements={[form]} />;
};

export default IngredientDisplay;
