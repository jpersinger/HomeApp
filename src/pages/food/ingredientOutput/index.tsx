import { cloneDeep, filter } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import CheckboxRow from "../../../components/checkboxRow";
import theme from "../../../components/theme";
import { Paragraph2 } from "../../../components/typography";
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
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          margin: "2em 2em 0 0",
          backgroundColor:
            completedIngredients.length === ingredients.length
              ? theme.colors.affirmative
              : theme.colors.primaryDark,
          padding: "0.5em 1em",
          borderRadius: 20,
          color: theme.colors.white
        }}
      >
        <Paragraph2>
          {completedIngredients.length}/{ingredients.length}
        </Paragraph2>
      </div>
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
