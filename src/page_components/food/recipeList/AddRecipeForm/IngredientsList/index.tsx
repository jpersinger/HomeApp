import React from "react";
import Button from "../../../../../ui_components/button";
import { ModalPageProps } from "../../../../../ui_components/modal/multiModal";
import theme from "../../../../../ui_components/theme";
import { areAllIngredientsComplete } from "../../../services";
import IngredientDisplay, { IngredientProps } from "./ingredientDisplay";

interface Props extends IngredientProps {
  goBack: () => void;
  goNext: () => void;
}

const getIngredientsList = ({
  goBack,
  goNext,
  ingredients,
  addIngredient,
  updateIngredientName,
  updateIngredientAmount,
  updateIngredientMeasurementType
}: Props): ModalPageProps => ({
  title: "Ingredients",
  content: (
    <IngredientDisplay
      ingredients={ingredients}
      addIngredient={addIngredient}
      updateIngredientName={updateIngredientName}
      updateIngredientAmount={updateIngredientAmount}
      updateIngredientMeasurementType={updateIngredientMeasurementType}
    />
  ),
  footer: (
    <div style={{ display: "flex", width: "100%" }}>
      <Button onClick={goBack} color={theme.colors.secondary}>
        Back
      </Button>
      <Button
        onClick={goNext}
        disabled={!areAllIngredientsComplete(ingredients)}
        style={{ marginLeft: "1em" }}
        color={theme.colors.primary}
      >
        Next
      </Button>
    </div>
  )
});

export default getIngredientsList;
