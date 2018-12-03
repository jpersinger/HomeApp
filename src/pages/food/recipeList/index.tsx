import { groupBy, map } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import AccordionSection from "../../../components/accordion";
import IconButton from "../../../components/icon/iconButton";
import { ListRow } from "../../../components/listRow";
import theme from "../../../components/theme";
import { Headline1 } from "../../../components/typography";
import { getCookTimeString } from "../../../services/food_services";
import { Recipe } from "../../../services/food_services/food.definitions";
import { toggleRecipe } from "../../../services/redux/actions/food";
import { RootState } from "../../../services/redux/reducers";
import AddRecipeModal from "./AddRecipeModal";
import { AddRecipeContainer } from "./components";

interface Props {
  selectMode: boolean;
  groupedRecipes: { [groupName: string]: Recipe[] };
  recipeList: RootState["food"]["recipeList"];
  toggleRecipe: (recipeTitle: string) => void;
}

const RecipeList = ({
  selectMode,
  groupedRecipes,
  recipeList,
  toggleRecipe
}: Props) => {
  const [addRecipeModalOpen, toggleAddRecipeModalOpen] = useState(false);

  return (
    <div>
      {map(groupedRecipes, (recipes, name) => (
        <div key={name} style={{ paddingTop: "2em" }}>
          <Headline1>{name}</Headline1>
          {recipes.map(recipe => (
            <AccordionSection
              key={recipe.title}
              selectMode={selectMode}
              selectItem={() => {
                toggleRecipe(recipe.title);
              }}
              selected={recipeList.indexOf(recipe.title) !== -1}
              edit={() => {}}
              delete={() => {}}
              aboveTheFold={
                <ListRow
                  text={recipe.title}
                  subText={getCookTimeString(recipe.cookTime)}
                />
              }
            >
              <ul>
                {recipe.ingredients.map(
                  ({ name, amount, measurementType, extraInformation }) => (
                    <li key={name + recipe.title + amount}>
                      {amount} {measurementType} {name} {extraInformation}
                    </li>
                  )
                )}
              </ul>
              <ol>
                {recipe.instructions.map(instruction => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ol>
            </AccordionSection>
          ))}
        </div>
      ))}
      <AddRecipeModal
        open={addRecipeModalOpen}
        toggleOpen={() => toggleAddRecipeModalOpen(false)}
      />
      <AddRecipeContainer>
        <IconButton
          name="add"
          size={50}
          onClick={() => toggleAddRecipeModalOpen(true)}
          container
          containerFill={theme.colors.primary}
        />
      </AddRecipeContainer>
    </div>
  );
};

const mapStateToProps = ({ food: { allRecipes, recipeList } }: RootState) => {
  const groupedRecipes = groupBy(allRecipes, ({ mealType }) => mealType);
  return {
    groupedRecipes,
    recipeList
  };
};

export default connect(
  mapStateToProps,
  { toggleRecipe }
)(RecipeList);
