function generateBandName(clothingColor, lastFoodEaten) {
  clothingColor = capitalizeColor(clothingColor);
  lastFoodEaten = capitalizeFood(lastFoodEaten);
  return `${clothingColor} ${lastFoodEaten}`;
}


function capitalizeColor(clothingColor) {
  clothingColor = clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
  return clothingColor

}

function capitalizeFood(lastFoodEaten) {
  lastFoodEaten = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
  return lastFoodEaten
}

console.log(generateBandName("black", "PIE"));
