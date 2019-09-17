// While loops 1.

// let looping = 0;

// while (looping < 15) {
//   console.log(`It will run until ${looping}`);
//   looping += 1;
// }

// While loops 2.

// let myArrayOfCities = [
//   "Buenos Aires ",
//   "Mexico DF ",
//   "Paris ",
//   "Madrid ",
//   "Berlin ",
//   "Oslo"
// ];
// let cityString = "";
// let x = 0;

// while (x < myArrayOfCities.length) {
//   cityString += myArrayOfCities[x];
//   ++x;
// }
// console.log(cityString);

// While loops 3.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;

console.log(`Before: ${numbers}`);
while (index < numbers.length) {
  let isEven = numbers[index] % 2 === 0;
  if (isEven) {
    numbers[index] -= 1;
  } else {
    numbers[index] += 1;
  }
  ++index;
}

console.log(`After:  ${numbers}`);
