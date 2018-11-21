import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/button";
import theme from "../../components/theme";
import { clearRecipes } from "../../services/redux/actions/food";
import { RootState } from "../../services/redux/reducers";
import { SelectRecipesContainer } from "./components";
import IngredientOutput from "./ingredientOutput";
import RecipeList from "./recipeList";

interface Props {
  recipeList: RootState["food"]["recipeList"];
  clearRecipes: () => void;
}

enum Views {
  recipeList,
  ingredientsList
}

const Food = ({ recipeList, clearRecipes }: Props) => {
  const [selectedView, setSelectedView] = useState<Views>(Views.recipeList);
  const [selectMode, setSelectMode] = useState(false);

  return (
    <div>
      {selectedView === Views.recipeList && (
        <RecipeList selectMode={selectMode} />
      )}
      {selectedView === Views.ingredientsList && <IngredientOutput />}

      <SelectRecipesContainer>
        {recipeList.length > 0 && (
          <Button
            color={theme.colors.affirmative}
            onClick={() => setSelectedView(Views.ingredientsList)}
            style={{ marginRight: "1em" }}
          >
            Get ingredient list
          </Button>
        )}

        {selectedView === Views.recipeList && (
          <Button
            color={theme.colors.secondary}
            onClick={() => {
              setSelectMode(!selectMode);
              clearRecipes();
            }}
          >
            Select Recipes
          </Button>
        )}
      </SelectRecipesContainer>
    </div>
  );
};

export default connect(
  ({ food: { recipeList } }: RootState) => ({
    recipeList
  }),
  { clearRecipes }
)(Food);
