import {
  Ingredient,
  MealTypes,
  MeasurementTypes,
  Recipe
} from "./food.definitions";

enum Ingredients {
  whiteSugar = "white sugar",
  egg = "egg",
  salt = "salt",
  sweetPotato = "sweet potato",
  butter = "butter",
  milk = "milk",
  vanillaExtract = "vanilla extract",
  brownSugar = "brown sugar",
  allPurposeFlour = "all-purpose flour",
  pecans = "pecans",
  miniMarshmallows = "mini marshmallows",
  freshCranberries = "fresh cranberries",
  tartApple = "tart apple",
  orangeZest = "orange zest",
  orangeJuice = "orange juice",
  quickCookingOats = "quick-cooking oats",
  carrots = "carrots",
  blackPepper = "black pepper",
  unsaltedButter = "unsalted butter",
  flatLeafParsley = "flat leaf parsley",
  freshGreenBeans = "fresh green beans",
  extraVirginOliveOil = "extra virgin olive oil",
  almonds = "almonds",
  garlic = "garlic",
  skimMilk = "skim milk",
  creamCheese = "cream cheese",
  sweetenedCondensedMilk = "sweetened condensed milk",
  vanillaPuddingMix = "vanilla pudding mix",
  whippedTopping = "whipped topping",
  banana = "banana",
  vanillaWafers = "vanilla wafers"
}

export const emptyIngredient: Ingredient = {
  name: "",
  amount: 0,
  measurementType: MeasurementTypes.unit
};

export const emptyRecipe: Recipe = {
  title: "",
  cookTime: 0,
  mealType: MealTypes.snack,
  ingredients: [emptyIngredient],
  instructions: [""]
};

export const sweetPotatoCasserole: Recipe = {
  title: "Sweet Potato Casserole",
  mealType: MealTypes.side,
  cookTime: 0.5,
  ingredients: [
    {
      name: Ingredients.sweetPotato,
      amount: 4,
      measurementType: MeasurementTypes.cup,
      extraInformation: "cubed"
    },
    {
      name: Ingredients.whiteSugar,
      amount: 0.5,
      measurementType: MeasurementTypes.cup
    },
    {
      name: Ingredients.egg,
      amount: 2,
      measurementType: MeasurementTypes.unit,
      extraInformation: "beaten"
    },
    {
      name: Ingredients.salt,
      amount: 0.5,
      measurementType: MeasurementTypes.tsp
    },
    {
      name: Ingredients.butter,
      amount: 7,
      measurementType: MeasurementTypes.tbsp,
      extraInformation: "softened"
    },
    {
      name: Ingredients.milk,
      amount: 0.5,
      measurementType: MeasurementTypes.cup
    },
    {
      name: Ingredients.vanillaExtract,
      amount: 0.5,
      measurementType: MeasurementTypes.tsp
    },
    {
      name: Ingredients.brownSugar,
      amount: 0.5,
      measurementType: MeasurementTypes.cup,
      extraInformation: "packed"
    },
    {
      name: Ingredients.allPurposeFlour,
      amount: 0.333,
      measurementType: MeasurementTypes.cup
    },
    {
      name: Ingredients.pecans,
      amount: 0.5,
      measurementType: MeasurementTypes.cup,
      extraInformation: "chopped"
    },
    {
      name: Ingredients.miniMarshmallows,
      amount: 1,
      measurementType: MeasurementTypes.unit
    }
  ],
  instructions: [
    "Preheat oven to 325 degrees F (165 degrees C). Put sweet potatoes in a medium saucepan with water to cover. Cook over medium high heat until tender; drain and mash.",
    "In a large bowl, mix together the sweet potatoes, white sugar, eggs, salt, butter, milk and vanilla extract. Mix until smooth. Transfer to a 9x13 inch baking dish.",
    "In medium bowl, mix the brown sugar and flour. Cut in the butter until the mixture is coarse. Stir in the pecans. Sprinkle the mixture over the sweet potato mixture.",
    "Bake in the preheated oven 30 minutes, or until the topping is lightly brown."
  ]
};

const cranberrySauce: Recipe = {
  title: "Cranberry Sauce",
  mealType: MealTypes.side,
  cookTime: 0.2,
  ingredients: [
    {
      name: Ingredients.freshCranberries,
      amount: 12,
      measurementType: MeasurementTypes.oz
    },
    {
      name: Ingredients.whiteSugar,
      amount: 1,
      measurementType: MeasurementTypes.cup
    },
    {
      name: Ingredients.orangeZest,
      amount: 1,
      measurementType: MeasurementTypes.unit,
      extraInformation: "or lemon zest. unit: strips"
    },
    {
      name: Ingredients.orangeJuice,
      amount: 2,
      measurementType: MeasurementTypes.tbsp
    }
  ],
  instructions: [
    "Empty a 12-ounce bag of fresh or frozen cranberries into a saucepan and transfer 1/2 cup to a small bowl. Add 1 cup sugar, 1 strip orange or lemon zest and 2 tablespoons water to the pan and cook over low heat, stirring occasionally, until the sugar dissolves and the cranberries are soft, about 10 minutes. Increase the heat to medium and cook until the cranberries burst, about 12 minutes. Reduce the heat to low and stir in the reserved cranberries. Add sugar, salt and pepper to taste and cool to room temperature before serving."
  ]
};

const cranberryAppleCrisp: Recipe = {
  title: "Cranberry Apple Crisp",
  mealType: MealTypes.dessert,
  cookTime: 0.833,
  ingredients: [
    {
      name: Ingredients.tartApple,
      amount: 3,
      measurementType: MeasurementTypes.cup,
      extraInformation: "chopped, peeled"
    },
    {
      name: Ingredients.freshCranberries,
      amount: 16,
      measurementType: MeasurementTypes.oz
    },
    {
      name: Ingredients.whiteSugar,
      amount: 1,
      measurementType: MeasurementTypes.cup
    },
    {
      name: Ingredients.allPurposeFlour,
      amount: 3,
      measurementType: MeasurementTypes.tbsp
    },
    {
      name: Ingredients.quickCookingOats,
      amount: 1.5,
      measurementType: MeasurementTypes.cup
    },
    {
      name: Ingredients.allPurposeFlour,
      amount: 0.5,
      measurementType: MeasurementTypes.cup
    },
    {
      name: Ingredients.brownSugar,
      amount: 0.5,
      measurementType: MeasurementTypes.cup,
      extraInformation: "packed"
    },
    {
      name: Ingredients.butter,
      amount: 0.5,
      measurementType: MeasurementTypes.cup,
      extraInformation: "melted"
    },
    {
      name: Ingredients.pecans,
      amount: 0.25,
      measurementType: MeasurementTypes.cup,
      extraInformation: "chopped"
    }
  ],
  instructions: [
    "Combine apples, cranberries, sugar and flour. Pour into a greased 11x7-in. baking dish. In a bowl, mix topping ingredients until crumbly; sprinkle over apple mixture. Bake at 350° for 50-55 minutes or until fruit is tender."
  ]
};

const sauteedCarrots: Recipe = {
  title: "Sauteed Carrots",
  cookTime: 0.25,
  mealType: MealTypes.side,
  ingredients: [
    {
      name: Ingredients.carrots,
      amount: 2,
      measurementType: MeasurementTypes.cup,
      extraInformation: "pounds"
    },
    {
      name: Ingredients.salt,
      amount: 1,
      measurementType: MeasurementTypes.tsp
    },
    {
      name: Ingredients.blackPepper,
      amount: 0.25,
      measurementType: MeasurementTypes.tsp
    },
    {
      name: Ingredients.unsaltedButter,
      amount: 2,
      measurementType: MeasurementTypes.tbsp
    },
    {
      name: Ingredients.flatLeafParsley,
      amount: 1.5,
      measurementType: MeasurementTypes.tbsp
    }
  ],
  instructions: [
    "Peel the carrots and cut them diagonally in 1/4-inch slices. You should have about 6 cups of carrots. Place the carrots, 1/3 cup water, the salt, and pepper in a large (10- to 12-inch) saute pan and bring to a boil. Cover the pan and cook over medium-low heat for 7 to 8 minutes, until the carrots are just cooked through. Add the butter and saute for another minute, until the water evaporates and the carrots are coated with butter. Off the heat, toss with the dill or parsley. Sprinkle with salt and pepper and serve."
  ]
};

const greenBeansWithAlmonds: Recipe = {
  title: "Green Beans with Almonds",
  cookTime: 0.25,
  mealType: MealTypes.side,
  ingredients: [
    {
      name: Ingredients.freshGreenBeans,
      amount: 1.5,
      measurementType: MeasurementTypes.pound,
      extraInformation: "trimmed"
    },
    {
      name: Ingredients.extraVirginOliveOil,
      amount: 1,
      measurementType: MeasurementTypes.tbsp
    },
    {
      name: Ingredients.butter,
      amount: 1,
      measurementType: MeasurementTypes.tbsp
    },
    {
      name: Ingredients.almonds,
      amount: 1,
      measurementType: MeasurementTypes.unit
    },
    {
      name: Ingredients.garlic,
      amount: 3,
      measurementType: MeasurementTypes.unit
    }
  ],
  instructions: [
    "Cook green beans 5 minutes in 1-inch boiling water, covered. Drain beans and return pan to heat.",
    "Add oil and butter pat to the pan. Toss beans in oil and melted butter. Season beans with a little salt and transfer to a serving plate.",
    "Garnish green beans with toasted slivered or sliced almonds."
  ]
};

const bananaPudding: Recipe = {
  title: "Banana Pudding",
  cookTime: 3.5,
  mealType: MealTypes.dessert,
  ingredients: [
    {
      name: Ingredients.creamCheese,
      amount: 8,
      measurementType: MeasurementTypes.oz,
      extraInformation: "room temperature"
    },
    {
      name: Ingredients.sweetenedCondensedMilk,
      amount: 14,
      measurementType: MeasurementTypes.oz
    },
    {
      name: Ingredients.vanillaPuddingMix,
      amount: 5,
      measurementType: MeasurementTypes.oz
    },
    {
      name: Ingredients.skimMilk,
      amount: 3,
      measurementType: MeasurementTypes.cup,
      extraInformation: "ice cold"
    },
    {
      name: Ingredients.vanillaExtract,
      amount: 1,
      measurementType: MeasurementTypes.tsp
    },
    {
      name: Ingredients.whippedTopping,
      amount: 8,
      measurementType: MeasurementTypes.oz
    },
    {
      name: Ingredients.banana,
      amount: 4,
      measurementType: MeasurementTypes.unit
    },
    {
      name: Ingredients.vanillaWafers,
      amount: 12,
      measurementType: MeasurementTypes.oz
    }
  ],
  instructions: [
    "In a large bowl, beat cream cheese until fluffy. Beat in condensed milk, pudding mix, cold milk and vanilla until smooth. Fold in 1/2 of the whipped topping.",
    "Line the bottom of a 9x13 inch dish with vanilla wafers. Arrange sliced bananas evenly over wafers. Spread with pudding mixture. Top with remaining whipped topping. Chill."
  ]
};

/*
https://www.allrecipes.com/recipe/21261/yummy-sweet-potato-casserole/
https://www.foodnetwork.com/recipes/food-network-kitchen/perfect-cranberry-sauce-recipe-2104277
https://www.tasteofhome.com/recipes/cranberry-apple-crisp/
https://www.foodnetwork.com/recipes/ina-garten/sauteed-carrots-recipe-1916159
https://www.foodnetwork.com/recipes/rachael-ray/green-beans-with-toasted-almonds-recipe-1940021
https://www.allrecipes.com/recipe/21398/banana-pudding-iv/?internalSource=hub%20recipe&referringId=977&referringContentType=Recipe%20Hub&clickId=cardslot%2016
*/

/*
turkey
gravy
rolls
peas or corn dish
mashed potatoes
salad
serving dishes?
*/

export const recipes: Recipe[] = [
  sweetPotatoCasserole,
  cranberrySauce,
  cranberryAppleCrisp,
  sauteedCarrots,
  greenBeansWithAlmonds,
  bananaPudding
];

export const ingredientOptions: string[] = [
  "sweet potato",
  "white sugar",
  "brown sugar",
  "flour",
  "eggs",
  "pecans",
  "salt",
  "lime juice",
  "lemon juice",
  "cream cheese"
];
