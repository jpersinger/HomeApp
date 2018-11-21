import { chain, reduce } from "lodash";
import { Ingredient, MeasurementTypes, Recipe } from "./food.definitions";

export const getCookTimeString = (cookTime: number): string => {
  const time = cookTime < 1 ? cookTime * 60 : cookTime;
  const measure = cookTime < 1 ? "minute" : "hour";
  return `${time} ${measure}${time === 1 ? "" : "s"}`;
};

export const combineIngredients = (recipes: Recipe[]): Ingredient[] =>
  chain(recipes)
    .flatMap(({ ingredients }) => ingredients)
    .groupBy("name")
    .map(ingredientType => combineIngredient(ingredientType))
    .valueOf();

export const combineIngredient = (ingredients: Ingredient[]): Ingredient => {
  if (
    ingredients[0].measurementType === MeasurementTypes.unit ||
    ingredients[0].measurementType === MeasurementTypes.oz
  ) {
    return {
      name: ingredients[0].name,
      amount: reduce(ingredients, (sum, { amount }) => sum + amount, 0),
      measurementType: ingredients[0].measurementType
    };
  }

  const inTsp = reduce(
    ingredients,
    (sum, { amount, measurementType }) =>
      sum + MEASUREMENT_CONVERTER_MAP[measurementType] * amount,
    0
  );

  return {
    name: ingredients[0].name,
    ...convertToLargestMeasureType(inTsp)
  };
};

const MEASUREMENT_CONVERTER_MAP = {
  [MeasurementTypes.cup]: 48,
  [MeasurementTypes.tbsp]: 3,
  [MeasurementTypes.tsp]: 1,
  [MeasurementTypes.oz]: 0,
  [MeasurementTypes.unit]: 0
};

export const convertToLargestMeasureType = (
  amountInTsp: number
): { amount: number; measurementType: MeasurementTypes } => {
  if (amountInTsp >= MEASUREMENT_CONVERTER_MAP[MeasurementTypes.cup] * 0.25) {
    return {
      amount: amountInTsp / MEASUREMENT_CONVERTER_MAP[MeasurementTypes.cup],
      measurementType: MeasurementTypes.cup
    };
  } else if (amountInTsp >= MEASUREMENT_CONVERTER_MAP[MeasurementTypes.tbsp]) {
    return {
      amount: amountInTsp / MEASUREMENT_CONVERTER_MAP[MeasurementTypes.tbsp],
      measurementType: MeasurementTypes.tbsp
    };
  }

  return {
    amount: amountInTsp,
    measurementType: MeasurementTypes.tsp
  };
};
