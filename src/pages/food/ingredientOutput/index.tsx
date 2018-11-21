import { cloneDeep, filter } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import CheckboxRow from "../../../components/checkboxRow";
import theme from "../../../components/theme";
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
  const [completedIngredients, setIngredientsSelected] = useState<string[]>([]);

  const filteredRecipes: Recipe[] = filter(
    allRecipes,
    ({ title }) => recipeList.indexOf(title) !== -1
  );
  const ingredients = combineIngredients(filteredRecipes);

  const toggleIngredientSelection = (name: string) => {
    const currentIngredients = cloneDeep(completedIngredients);
    const index = currentIngredients.indexOf(name);
    if (index === -1) {
      currentIngredients.push(name);
    } else {
      currentIngredients.splice(index, 1);
    }
    setIngredientsSelected(currentIngredients);
  };

  return (
    <div>
      {ingredients.map(({ amount, measurementType, name }) => (
        <CheckboxRow
          key={name}
          selected={completedIngredients.indexOf(name) !== -1}
          onClick={() => {
            toggleIngredientSelection(name);
          }}
          styleOverrides={{ borderBottom: theme.borders.listRowBorder }}
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
