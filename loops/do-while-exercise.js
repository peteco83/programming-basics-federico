console.log("Do while Loops 1");
let arr = [1, 2, 3, 4, 5, 20];
let index = 0;
let result = 0;

console.log(`\nBefore: ${arr}`);
do {
  result += arr[index];
  ++index;
} while (index < arr.length);
console.log(`After: ${result}`);

console.log("\nDo while Loops 2");

let number = 1;
let resultTwo = 1;

do {
  result = (number * (number + 1)) / 2;
  ++number;
} while (number <= 20);

console.log(`\nThe result is ${result}`);

console.log("\nDo while Loops 3");

let myArray = ["matt", "sara", "lara"];
let myIndex = 0;
let myCapitalizedArray = [];
console.log(`\nNames before: ${myArray}`);
do {
  myCapitalizedArray.push(
    myArray[myIndex][0].toUpperCase() +
      myArray[myIndex].toLowerCase().substring(1)
  );
  ++myIndex;
} while (myIndex < myArray.length);

console.log(`Names after: ${myCapitalizedArray}`);

console.log("\nDo_while_Loops_5");

let program = [];
let i = 0;

const repeatIt = (item, times) => {
  do {
    program.push(item);
    ++i;
  } while (i < times);

  return program;
};

console.log(repeatIt("gorkeim", 5));
