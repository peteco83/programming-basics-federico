// Do while Loops 1.
let arr = [1, 2, 3];
let index = 0;
let result = 0;

console.log(`Before: ${arr}`);
do {
  result += arr[index];
  ++index;
} while (index < arr.length);
console.log(`After: ${result}`);

// Do while loops 2.

// let number = 1;
// let result = 1;

// do {
//   result = (number * (number + 1)) / 2;
//   ++number;
// } while (number <= 20);

// console.log(`The result is ${result}`);

// Do while loop 3

// let myArray = ["matt", "sara", "lara"];
// let myIndex = 0;
// let myCapitalizedArray = [];
// console.log(`Names before: ${myArray}`);
// do {
//   myCapitalizedArray.push(
//     myArray[myIndex][0].toUpperCase() + myArray[myIndex].substring(1)
//   );
//   ++myIndex;
// } while (myIndex < myArray.length);

// console.log(`Names after: ${myCapitalizedArray}`);
