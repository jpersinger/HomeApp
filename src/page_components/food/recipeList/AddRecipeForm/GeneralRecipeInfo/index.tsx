import React from "react";
import Button from "../../../../../ui_components/button";
import { ModalPageProps } from "../../../../../ui_components/modal/multiModal";
import theme from "../../../../../ui_components/theme";
import GeneralRecipeInfoDisplay, {
  GeneralRecipeProps
} from "./generalRecipeInfoDisplay";

interface Props extends GeneralRecipeProps {
  goNext: () => void;
}

const getGeneralRecipeInfo = ({
  goNext,
  title,
  updateTitle,
  cookTime,
  updateCookTime,
  mealType,
  updateMealType
}: Props): ModalPageProps => ({
  title: "Recipe Information",
  content: (
    <GeneralRecipeInfoDisplay
      title={title}
      updateTitle={updateTitle}
      cookTime={cookTime}
      updateCookTime={updateCookTime}
      mealType={mealType}
      updateMealType={updateMealType}
    />
  ),
  footer: (
    <Button
      onClick={goNext}
      color={theme.colors.primary}
      disabled={!title || !cookTime || !mealType}
    >
      Next
    </Button>
  )
});

export default getGeneralRecipeInfo;
