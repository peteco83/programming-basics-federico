//2.3
const myArray = [];

function generateBandName(clothingColor, lastFoodEaten) {
  let bandName = "";

  let color = capitalizeInitial(clothingColor);
  let food = capitalizeInitial(lastFoodEaten);

  bandName = `The ${color} ${food}`;

  myArray.push(bandName);

  return bandName;
}

function capitalizeInitial(rawString) {
  return `${rawString[0].toUpperCase()}${rawString
    .substring(1)
    .toLowerCase()} `;
}

console.log(capitalizeInitial("crimson") + capitalizeInitial("KEBAB"));
generateBandName("Black", "BeaNS");
console.log(myArray);
