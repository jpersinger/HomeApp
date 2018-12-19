import React, { useState } from "react";
import { connect } from "react-redux";
import { clearRecipes } from "../../services/redux/actions/food";
import { RootState } from "../../services/redux/reducers";
import Button from "../../ui_components/button";
import theme from "../../ui_components/theme";
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
    <div style={{ padding: "1em" }}>
      {selectedView === Views.recipeList && (
        <RecipeList selectMode={selectMode} />
      )}
      {selectedView === Views.ingredientsList && <IngredientOutput />}

      <SelectRecipesContainer>
        {recipeList.length > 0 && selectedView === Views.recipeList && (
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
