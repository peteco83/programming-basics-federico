function rC(clothingColor, lastFoodEaten) {
  //   let capital = clothingColor.toUppercase;
  let firstLetter = clothingColor.substring(0, 1);
  //   let capital = firstLetter.toUpperCase();
  //   let rest = clothingColor.substring(1);
  let foodFirstletter = lastFoodEaten.substring(0, 1);
  //   let foodCapital = foodFirstletter.toUpperCase();
  //   let foodRest = lastFoodEaten.substring(1);
  return `The ${firstLetter.toUpperCase() +
    clothingColor.substring(1)} ${foodFirstletter.toUpperCase() +
    lastFoodEaten.substring(1)}`;
}

console.log(rC("brown", "beans"));
console.log(rC("yellow", "egg"));
console.log(rC("blue", "spaghetti"));
console.log(rC("black", "bananas"));
