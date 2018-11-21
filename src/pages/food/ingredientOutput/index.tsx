import { filter } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { ListRow } from "../../../components/listRow";
import {
  combineIngredients,
  convertMeasurementForDisplay
} from "../../../services/food_services";
import {
  MeasurementTypes,
  Recipe
} from "../../../services/food_services/food.definitions";
import { RootState } from "../../../services/redux/reducers";

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
  console.log(ingredients);

  return (
    <div>
      {ingredients.map(({ amount, measurementType, name }) => (
        <ListRow
          key={name}
          text={name}
          subText={
            measurementType === MeasurementTypes.unit
              ? `${amount}`
              : convertMeasurementForDisplay(amount)
          }
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
