//2.1
const myArray = [];

function generateBandName(clothingColor, lastFoodEaten) {
  let bandName = '';

  let color = capitalizeColor(clothingColor);
  let food = capitalizeFood(lastFoodEaten);

  bandName = `The ${color} ${food}`;

  myArray.push(bandName);

  return bandName;
}

console.log(generateBandName("brown", "beans"));
generateBandName("rosa", "spagheTTi")
console.log(myArray)

//2.2
function capitalizeColor(clothingColor) {
  return clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
  // const food = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
}
console.log(capitalizeColor("black"));

function capitalizeFood(lastFoodEaten) {
  return lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
}
console.log(capitalizeFood("beans"))

// //2.3
// function generateBandName(rawString) {
//   const both = rawString[0].toUpperCase() + rawString.substring(1).toLowerCase();
//   return `${both} `;
// }

// console.log(generateBandName("crimson") + generateBandName("KEBAB"));


// // 2.4 


// function makeTasty(color)
// let tastyColor = ''
// switch (color) {

// }