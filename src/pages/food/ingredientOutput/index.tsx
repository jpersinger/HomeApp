import { filter } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { ListRow } from "../../../components/listRow";
import { RootState } from "../../../services/redux/reducers";
import { Recipe } from "../food.definitions";
import { combineIngredients } from "../services";

interface Props {
  allRecipes: Recipe[];
  recipeList: RootState["food"]["recipeList"];
}

const IngredientOutput = ({ allRecipes, recipeList }: Props) => {
  const filteredRecipes: Recipe[] = filter(
    allRecipes,
    ({ title }) => recipeList.indexOf(title) !== -1
  );
  const ingredients = combineIngredients(filteredRecipes);

  return (
    <div>
      {ingredients.map(({ amount, measurementType, name }) => (
        <ListRow
          key={name}
          text={name}
          subText={`${amount} ${measurementType}`}
        />
      ))}
    </div>
  );
};

export default connect(
  ({ food: { allRecipes, recipeList } }: RootState) => ({
    allRecipes,
    recipeList
  }),
  {}
)(IngredientOutput);
