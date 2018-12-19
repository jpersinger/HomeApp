import { areAllInstructionsComplete } from "./recipeList/AddRecipeForm/InstructionsList/services";

describe("all ingredients complete", () => {
  test("do any ingredients have an amount of 0 or no name?", () => {
    // expect(areAl(sweetPotatoCasserole.ingredients))
    //   .toBeTruthy;
    areAllInstructionsComplete([]);
  });

  test("", () => {
    // const ingredients = cloneDeep(sweetPotatoCasserole.ingredients);
    // ingredients.push(emptyIngredient);
    // expect(allIngredientsAreComplete(ingredients)).toBeFalsy;
  });
});

// describe("", () => {
//   test("2 teaspoons is 2 teaspoons", () => {
//     expect(getAmountInTsp(2, MeasurementTypes.tsp)).toBe(2);
//   });

//   test("1 tablespoon is 3 teaspoons", () => {
//     expect(getAmountInTsp(1, MeasurementTypes.tbsp)).toBe(3);
//   });

//   test("2 tablespoons is 6 teaspoons", () => {
//     expect(getAmountInTsp(2, MeasurementTypes.tbsp)).toBe(6);
//   });

//   test("1 cup is 48 teaspoons", () => {
//     expect(getAmountInTsp(1, MeasurementTypes.cup)).toBe(48);
//   });

//   test("2 cups is 96 teaspoons", () => {
//     expect(getAmountInTsp(2, MeasurementTypes.cup)).toBe(96);
//   });

//   test("1 gallon is 768 teaspoons", () => {
//     expect(getAmountInTsp(1, MeasurementTypes.gallon)).toBe(768);
//   });
// });

// describe.only("", () => {
//   test.only("1 gallon", () => {
//     expect(convertMeasurementForDisplay(36)).toBe("1 gallon");
//   });

//   test("", () => {
//     expect(convertMeasurementForDisplay(2)).toBe("2 tsp");
//   });

//   test("", () => {
//     expect(convertMeasurementForDisplay(3)).toBe("1 tbsp");
//   });
// });
