// Do while Loops 1.
// let arr = [1, 2, 3];
// let index = 0;
// let result = 0;

// console.log(`Before: ${arr}`);
// do {
//   result += arr[index];
//   ++index;
// } while (index < arr.length);
// console.log(`After: ${result}`);

// Do while loops 2.

let number = 1;
let result = 1;

do {
  result = (number * (number + 1)) / 2;
  ++number;
} while (number <= 20);

console.log(`The result is ${result}`);
