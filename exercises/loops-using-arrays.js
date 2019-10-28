// 1. ** sumOfNumbers.** Create a program that adds up the numbers in an array(of at least 3 numbers).
// ** Bonus **: Print to screen both the sum and the product of these numbers.

console.log;

const sumOfNumbers = arrOfNumbers => {
  let total = 0;
  let totalMult = 1;
  arrOfNumbers.map(value => (total += value));
  arrOfNumbers.map(value => (totalMult *= value));
  return (
    `The result of the addition of the numbers of the array is ${total}` +
    `\nProduct: ${totalMult}`
  );
};

console.log(sumOfNumbers([5, 6, 2]));

// 2. ** Hello Frien ** Create an array filled with your friends' and family's names.Loop over the array and greet each friend e.g.Hello Maria! Hello Mike! etc. **
// Bonus **: Print the indexes of each item in the array.Expected output example: Mike is at index 1 of my friends array.

// const helloFriends = () => {
//   let myArrayOfFriends = ["Patrick", "Peter", "Peteco", "Pato", "Pablo"];
//   for (let i = 0; i < myArrayOfFriends.length; i += 1) {
//     console.log(`Hello ${myArrayOfFriends[i]}`);
//   }
// };
// helloFriends();

// const helloFriends = friends =>
//   friends.map((el, index, arr) =>
//     console.log(
//       `Hello ${el}, you are at index ${index} of my friends array`
//     )
//   );

// helloFriends(["Peter", "Pato", "Peto", "Pito", "Poto"]);

const factors = value =>
  value.map((element, index, arr) =>
    arr[index + 1] % element === 0 ? true : false
  );

// result.pop();

// return result.every(element => element === true);

// const factors = value =>
//   value.map(element =>
//     element[element.indexOf(element) + 1] % element === 0 ? true : false
//   );

console.log(factors([1, 2, 4, 8, 16, 32]));
// result.pop();

// return result.every(element => element === true);

// };

const capitalize = names =>
  names.map(
    el => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase()
  );

console.log("Array: [1, 2, 4, 8, 16, 32]");
console.log(
  `Array after capitalizing first letter: ${capitalize([
    "samuel",
    "MARIA",
    "luke",
    "mary"
  ])} `
);
