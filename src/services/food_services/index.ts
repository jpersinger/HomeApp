import { chain, cloneDeep, isEmpty, reduce, remove, round, some } from "lodash";
import { Ingredient, MeasurementTypes, Recipe } from "./food.definitions";

export const allIngredientsAreComplete = (ingredients: Ingredient[]): boolean =>
  !some(ingredients, ingredient => isEmptyIngredient(ingredient));

export const isEmptyIngredient = ({ name, amount }: Ingredient): boolean =>
  isEmpty(name) || amount === 0;

export const allInstructionsAreComplete = (instructions: string[]): boolean =>
  !some(instructions, instruction => isEmpty(instruction));

export const getCleanNewRecipe = (recipe: Recipe): Recipe => {
  const cleanRecipe = cloneDeep(recipe);
  remove(cleanRecipe.ingredients, ingredient => isEmptyIngredient(ingredient));
  remove(cleanRecipe.instructions, instruction => isEmpty(instruction));
  return cleanRecipe;
};

export const getCookTimeString = (cookTime: number): string => {
  const time = cookTime < 1 ? cookTime * 60 : cookTime;
  const measure = cookTime < 1 ? "minute" : "hour";
  return `${time} ${measure}${time === 1 ? "" : "s"}`;
};

export const combineIngredients = (recipes: Recipe[]): Ingredient[] =>
  chain(recipes)
    .flatMap(({ ingredients }) => ingredients)
    .groupBy("name")
    .flatMap(ingredientType => combineIngredient(ingredientType))
    .valueOf();

export const combineIngredient = (ingredients: Ingredient[]): Ingredient[] => {
  // combine any of type unit together, all others get converted and combined
  const filteredIngredients = cloneDeep(ingredients);
  const unitTyped = remove(filteredIngredients, {
    measurementType: MeasurementTypes.unit
  });

  const allIngredients: Ingredient[] = [];

  if (!!unitTyped.length) {
    allIngredients.push({
      name: unitTyped[0].name,
      amount: reduce(unitTyped, (sum, { amount }) => sum + amount, 0),
      measurementType: MeasurementTypes.unit
    });
  }

  if (!filteredIngredients.length) {
    return allIngredients;
  }

  allIngredients.push({
    name: ingredients[0].name,
    amount: reduce(
      filteredIngredients,
      (sum, { amount, measurementType }) =>
        sum + getAmountInTsp(amount, measurementType),
      0
    ),
    measurementType: MeasurementTypes.tsp
  });
  return allIngredients;
};

const MEASUREMENT_CONVERTER_MAP: {
  [k in MeasurementTypes]: { smallUnit: MeasurementTypes; amount: number }
} = {
  unit: { smallUnit: MeasurementTypes.unit, amount: 1 },
  pinch: { smallUnit: MeasurementTypes.tsp, amount: 0.1 },
  dash: { smallUnit: MeasurementTypes.tsp, amount: 0.1 },
  tsp: { smallUnit: MeasurementTypes.tsp, amount: 1 },
  tbsp: { smallUnit: MeasurementTypes.tsp, amount: 3 },
  cup: { smallUnit: MeasurementTypes.tbsp, amount: 16 },
  oz: { smallUnit: MeasurementTypes.tbsp, amount: 2 },
  floz: { smallUnit: MeasurementTypes.tbsp, amount: 2 },
  pint: { smallUnit: MeasurementTypes.floz, amount: 16 },
  quart: { smallUnit: MeasurementTypes.pint, amount: 2 },
  gallon: { smallUnit: MeasurementTypes.quart, amount: 4 },
  liter: { smallUnit: MeasurementTypes.milliliter, amount: 1000 },
  pound: { smallUnit: MeasurementTypes.cup, amount: 2 },
  mL: { smallUnit: MeasurementTypes.tsp, amount: 0.202884 }
};

export const getAmountInTsp = (
  fullAmount: number,
  measurementType: MeasurementTypes
): number => {
  if (measurementType === MeasurementTypes.tsp) {
    return fullAmount;
  } else {
    const { smallUnit, amount } = MEASUREMENT_CONVERTER_MAP[measurementType];
    return getAmountInTsp(amount * fullAmount, smallUnit);
  }
};

export const getAmountFromTsp = (
  fullAmount: number,
  measurementType: MeasurementTypes
): number => {
  if (measurementType === MeasurementTypes.tsp) {
    return fullAmount;
  } else {
    const { smallUnit, amount } = MEASUREMENT_CONVERTER_MAP[measurementType];
    return getAmountFromTsp(fullAmount / amount, smallUnit);
  }
};

export const getLargest = (
  amount: number, // in tsp
  measurementType: MeasurementTypes
): { amount: number; measurementType: MeasurementTypes } => {
  const curr = round(getAmountFromTsp(amount, measurementType), 2);
  if (curr < 1 && measurementType !== MeasurementTypes.tsp) {
    return getLargest(
      amount,
      MEASUREMENT_CONVERTER_MAP[measurementType].smallUnit
    );
  }
  return {
    amount: curr,
    measurementType
  };
};

const getDisplayString = (
  amountInTsp: number,
  measurementType: MeasurementTypes
): string => {
  const conversion = getLargest(amountInTsp, measurementType);
  return `${conversion.amount} ${conversion.measurementType}`;
};

export const convertMeasurementForDisplay = (amountInTsp: number): string => {
  const cups = `${round(
    getAmountFromTsp(amountInTsp, MeasurementTypes.cup),
    2
  )} ${MeasurementTypes.cup}`;
  const solid = getDisplayString(amountInTsp, MeasurementTypes.pound);
  const usLiquid = getDisplayString(amountInTsp, MeasurementTypes.gallon);
  const metricLiquid = getDisplayString(amountInTsp, MeasurementTypes.liter);
  return `${cups} | ${solid} | ${usLiquid} | ${metricLiquid}`;
};
