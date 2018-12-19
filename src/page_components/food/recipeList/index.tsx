import { groupBy, map } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleRecipe } from "../../../services/redux/actions/food";
import { RootState } from "../../../services/redux/reducers";
import AccordionSection from "../../../ui_components/accordion";
import IconButton from "../../../ui_components/icon/iconButton";
import { ListRow } from "../../../ui_components/listRow";
import theme from "../../../ui_components/theme";
import { Headline1 } from "../../../ui_components/typography";
import { Recipe } from "../food.definitions";
import { getCookTimeString } from "../services";
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
