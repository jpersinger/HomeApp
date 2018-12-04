import { isEmpty } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../components/button";
import MultiModal, {
  ModalPageProps
} from "../../../components/modal/multiModal";
import theme from "../../../components/theme";
import { getCleanNewRecipe } from "../../../services/food_services";
import { addRecipe } from "../../../services/redux/actions/food";
import { RootState } from "../../../services/redux/reducers";
import GeneralRecipeInfo from "./AddRecipeForm/GeneralRecipeInfo";
import IngredientsList from "./AddRecipeForm/IngredientsList";
import InstructionsList from "./AddRecipeForm/InstructionsList";

interface Props {
  open: boolean;
  toggleOpen: () => void;
  addRecipe: () => void;
  generalInfoComplete: boolean;
  ingredientsComplete: boolean;
  instructionsComplete: boolean;
}

const AddRecipeModal = ({
  open,
  toggleOpen,
  addRecipe,
  generalInfoComplete,
  ingredientsComplete,
  instructionsComplete
}: Props) => {
  const [pageIndex, setPageIndex] = useState(0);

  const pages: ModalPageProps[] = [
    {
      title: "Recipe Information",
      content: <GeneralRecipeInfo />,
      footer: (
        <Button
          onClick={() => {
            setPageIndex(1);
          }}
          color={theme.colors.primary}
          disabled={!generalInfoComplete}
        >
          Next
        </Button>
      )
    },
    {
      title: "Ingredients",
      content: <IngredientsList />,
      footer: (
        <div style={{ display: "flex", width: "100%" }}>
          <Button
            onClick={() => {
              setPageIndex(0);
            }}
            color={theme.colors.secondary}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              setPageIndex(2);
            }}
            disabled={!ingredientsComplete}
            style={{ marginLeft: "1em" }}
            color={theme.colors.primary}
          >
            Next
          </Button>
        </div>
      )
    },
    {
      title: "Instructions",
      content: <InstructionsList />,
      footer: (
        <div style={{ display: "flex", width: "100%" }}>
          <Button
            onClick={() => {
              setPageIndex(1);
            }}
            color={theme.colors.secondary}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              addRecipe();
              toggleOpen();
            }}
            disabled={!instructionsComplete}
            style={{ marginLeft: "1em" }}
          >
            Save
          </Button>
        </div>
      )
    }
  ];

  return (
    <div>
      {open && (
        <MultiModal close={toggleOpen} pages={pages} pageIndex={pageIndex} />
      )}
    </div>
  );
};

const mapStateToProps = ({ food: { newRecipe } }: RootState) => {
  const cleanNewRecipe = getCleanNewRecipe(newRecipe);
  return {
    generalInfoComplete: !isEmpty(newRecipe.title) && !!newRecipe.cookTime,
    ingredientsComplete: !!cleanNewRecipe.ingredients.length,
    instructionsComplete: !!cleanNewRecipe.instructions.length
  };
};

export default connect(
  mapStateToProps,
  { addRecipe }
)(AddRecipeModal);
