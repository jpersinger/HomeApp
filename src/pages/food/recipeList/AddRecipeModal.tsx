import { isEmpty } from "lodash";
import React from "react";
import { connect } from "react-redux";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import { getCleanNewRecipe } from "../../../services/food_services";
import { addRecipe } from "../../../services/redux/actions/food";
import { RootState } from "../../../services/redux/reducers";
import AddRecipeForm from "./AddRecipeForm";

interface Props {
  open: boolean;
  toggleOpen: () => void;
  addRecipe: () => void;
  addDisabled: boolean;
}

const AddRecipeModal = ({
  open,
  toggleOpen,
  addRecipe,
  addDisabled
}: Props) => {
  return (
    <div>
      {open && (
        <Modal
          title="Add New Recipe"
          close={toggleOpen}
          content={<AddRecipeForm />}
          footer={
            <Button
              onClick={() => {
                addRecipe();
                toggleOpen();
              }}
              disabled={addDisabled}
            >
              Save
            </Button>
          }
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ food: { newRecipe } }: RootState) => {
  const cleanNewRecipe = getCleanNewRecipe(newRecipe);
  return {
    addDisabled:
      isEmpty(newRecipe.title) ||
      newRecipe.cookTime === 0 ||
      !cleanNewRecipe.ingredients.length ||
      !cleanNewRecipe.instructions.length
  };
};

export default connect(
  mapStateToProps,
  { addRecipe }
)(AddRecipeModal);
