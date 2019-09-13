// for loops

let myArray = ["hola ", "como ", "andas?"];
let text = "";

for (let i = 0; i < myArray.length; i++) {
  text += myArray[i];
}
console.log("Loops with for");
console.log(text);

// for in loops

let mySecondArray = ["Hallo ", "wie ", "geht`s?"];
let secondText = "";

for (let x in mySecondArray) {
  secondText += mySecondArray[x];
}
console.log("\nLoops with for in");
console.log(secondText);

// while loops

let z = 0;
let thirdText = "";

while (z < 10) {
  thirdText += z;
  z++;
}

console.log("\nLoops with while");
console.log(thirdText);

//While with array

let myThirdArray = ["Hallo ", "wie ", "geht`s?"];
let fourthText = "";
let y = 0;

// while (y < myThirdArray.length) {
//   fourthText += myThirdArray[y];
//   y++;
// }

//do while loop

do {
  fourthText += myThirdArray[y];
  y++;
} while (y < myThirdArray.length);

console.log("\nLoops with do while and arrays");
console.log(fourthText);
