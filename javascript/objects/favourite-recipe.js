let recipe = new Object();

recipe.title = "Mole";
recipe.serving = 2;
recipe.ingredients = ["cinnamon", "cumin", "cocoa"];

console.log(`-${recipe.title}`);
console.log(`-Serves; ${recipe.serving}`);
console.log(`-Ingredients:`);
console.log(`-${recipe.ingredients[0]}`);
console.log(`-${recipe.ingredients[1]}`);
console.log(`-${recipe.ingredients[2]}`);

// 1 - Create an object to hold information on your favorite recipe.It should have properties for title(a string), servings(a number),
// and ingredients(an array of strings).
// On separate lines(one console.log statement for each), log the recipe information so it looks like:
// -Mole
//     - Serves: 2
//         - Ingredients:
// -cinnamon
//     - cumin
//     - cocoa

const recipe2 = new Object();
recipe.title = "Pizza";
recipe.ingredients = {
  flour: 150,
  water: 50,
  mozzarella: 100
};
const makingPizza = howMany => {
  if (howMany === 1) {
    console.log(
      `You need ${recipe.ingredients.flour} grs. of flour, ${recipe.ingredients.water}ml water and ${recipe.ingredients.mozzarella}grs. mozzarella to make ${howMany} pizza`
    );
  } else {
    console.log(
      `You need ${recipe.ingredients.flour * howMany}grs. of flour, ${recipe
        .ingredients.water * howMany}ml water and ${recipe.ingredients
        .mozzarella * howMany}grs. mozzarella, to make ${howMany} Pizzas`
    );
  }
};

makingPizza(5);
