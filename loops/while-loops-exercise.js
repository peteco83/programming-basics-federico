// While loops 1.

// let looping = 0;

// while (looping < 15) {
//   console.log(`It will run until ${looping}`);
//   looping += 1;
// }

// While loops 2.

let myArrayOfCities = ["Buenos Aires", "Mexico DF", "Paris", "Madrid"];
let cityString = "";
let x = 0;

while (x < myArrayOfCities.length) {
  cityString += myArrayOfCities[x];
  ++x;
}
console.log(myArrayOfCities);
