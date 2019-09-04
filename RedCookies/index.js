//2.1
const myArray = [];

function generateBandName(clothingColor, lastFoodEaten) {
  let bandName = ''
  let color = clothingColor[0].toUpperCase();
  color += clothingColor.substring(1).toLowerCase();

  let food = lastFoodEaten[0].toUpperCase();
  food += lastFoodEaten.substring(1).toLowerCase()

  bandName = `The ${color} ${food}`

  myArray.push(bandName);

  return bandName;
}

console.log(generateBandName("brown", "beans"));
generateBandName("rosa", "spagheTTi")
console.log(myArray)

//2.3
function generateBandName(rawString) {
  const both = rawString[0].toUpperCase() + rawString.substring(1).toLowerCase();
  return `${both} `;
}

console.log(generateBandName("crimson") + generateBandName("KEBAB"));


// 2.4 


function makeTasty(color)
let tastyColor = ''
switch (color) {

}