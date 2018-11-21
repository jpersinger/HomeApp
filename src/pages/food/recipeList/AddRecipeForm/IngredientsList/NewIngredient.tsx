import { map } from "lodash";
import React from "react";
import styled from "react-emotion";
import DropDown from "../../../../../components/dropdown";
import { Input } from "../../../../../components/inputs";
import { Ingredient, MeasurementTypes } from "../../../food.definitions";
import { ingredientOptions } from "../../../food.fixtures";

const IngredientContainer = styled("div")`
  display: inline-grid;
  grid-template-columns: auto 40px 90px;
  width: 100%;
  align-items: baseline;
`;

const DropDownContainer = styled("div")`
  border: 1px solid black;
  margin: 1em;
`;

interface Props {
  ingredient: Ingredient;
  updateName: (name: string) => void;
  updateAmount: (amount: number) => void;
  updateType: (type: MeasurementTypes) => void;
}

const NewIngredient = ({
  ingredient,
  updateName,
  updateAmount,
  updateType
}: Props) => (
  <IngredientContainer>
    <DropDownContainer>
      <DropDown
        itemList={ingredientOptions}
        selectedItem={ingredient.name}
        selectItem={updateName}
        searchable
      />
    </DropDownContainer>
    <Input
      type="number"
      defaultValue={ingredient.amount + ""}
      onChange={event => {
        updateAmount(parseInt(event.target.value));
      }}
    />
    <DropDownContainer>
      <DropDown
        itemList={map(MeasurementTypes, type => type)}
        selectedItem={ingredient.measurementType}
        selectItem={(type: string) => {
          updateType(type as MeasurementTypes);
        }}
        searchable
      />
    </DropDownContainer>
  </IngredientContainer>
);

export default NewIngredient;
