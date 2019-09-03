function generateBandName(clothingColor, lastFoodEaten) {
  const color = clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
  const food = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
  return `${color} ${food}`;
}


console.log(generateBandName("black", "PIE"));
