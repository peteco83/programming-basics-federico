// 1. ** sumOfNumbers.** Create a program that adds up the numbers in an array(of at least 3 numbers).
// ** Bonus **: Print to screen both the sum and the product of these numbers.
console.log("Exercise One\n");
const sumOfNumbers = integers => {
  // let arrayOfNumbers = [5, 6, 2];
  // let total = 0;
  // let totalMult = 1;
  // for (let i = 0; i < arrayOfNumbers.length; i += 1) {
  //   total += arrayOfNumbers[i];
  //   totalMult *= arrayOfNumbers[i];
  // }
  let total = 0;
  let totalMult = 1;
  integers.map(value => (total += value));
  integers.map(valueMult => (totalMult *= valueMult));

  return `The result of the addition of the numbers of the array is ${total} and the product is ${totalMult}`;
};

console.log(sumOfNumbers([5, 6, 2]));
console.log("\nExercise Two\n");

// 2. ** Hello Frien ** Create an array filled with your friends' and family's names.Loop over the array and greet each friend e.g.Hello Maria! Hello Mike! etc. **
// Bonus **: Print the indexes of each item in the array.Expected output example: Mike is at index 1 of my friends array.

const helloFriends = friends => {
  let index = -1;

  return friends.map(element => {
    index += 1;
    console.log(
      `Hello ${element}. ${element} is at index ${index} of my friends array`
    );
  });
};
// friends.map(listOfFriends => console.log(`Hello ${listOfFriends}`));
helloFriends(["Patrick", "Peter", "Peteco", "Pato", "Pablo"]);

console.log("\nExercise Three\n");

const cityNames = cities => {
  const cityStrings = cities.map(element => cities.join(", "));
  return cityStrings[0];
};

console.log(cityNames(["Berlin", "Paris", "Prague", "Rome"]));
console.log("\nExercise Four\n");

const oddsAndEvens = integers => {
  return integers.map(value => (value % 2 === 0 ? value - 1 : value + 1));
};

console.log(oddsAndEvens([3, 5, 2, 4]));
console.log(oddsAndEvens([6, 9, 10, 20]));
console.log("\nExercise Five\n");

const capitalize = names => {
  return names.map(
    el => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase()
  );
};

console.log(capitalize(["matt", "sara", "lara"]));
console.log(capitalize(["samuel", "MARIA", "luke", "mary"]));
console.log("\nExercise Six\n");
const noDuplicates = arr => {
  return Array.from(new Set(arr));
};

console.log(noDuplicates([1, 4, 4, 7, 7, 7]));

console.log("\nExercise Seven\n");

const repeatIt = (item, times) => {
  let repeatedWord = [];
  for (let i = 0; i < times; i++) {
    repeatedWord.push(item);
  }
  return repeatedWord;
};

console.log(repeatIt("example", 3));
console.log("\nExercise Factors\n");

const factorsMap = integers =>
  integers.map((element, i) =>
    integers[i + 1] % element === 0 ? true : false
  );

const factorsLoop = integers => {
  // integers.map((element, i) =>
  //   integers[i + 1] % element === 0 ? true : false
  // );

  for (let i = 0; i < integers.length; i++) {
    if ((integers[i] + 1) % integers[i] === 0) {
      return true;
    }
    return false;
  }
};

//La que me paso Jaime

const factors = value => {
  const result = value.map((element, i) => {
    return value[i + 1] % element === 0;
  });

  result.pop();

  return result.every(element => element === true);
};

console.log("\nFactors Map not correct\n");

console.log(factorsMap([1, 2, 4, 8, 16, 32]));
console.log(factorsMap([1, 1, 1, 1, 1, 1]));
console.log(factorsMap([2, 4, 6, 7, 12]));
console.log(factorsMap([10, 1]));

console.log("\nFactors with forLoop correct\n");

console.log(factorsLoop([1, 2, 4, 8, 16, 32]));
console.log(factorsLoop([1, 1, 1, 1, 1, 1]));
console.log(factorsLoop([2, 4, 6, 7, 12]));
console.log(factorsLoop([10, 1]));

console.log("\nFactors Map correct\n");

console.log(factors([1, 2, 4, 8, 16, 32]));
console.log(factors([1, 1, 1, 1, 1, 1]));
console.log(factors([2, 4, 6, 7, 12]));
console.log(factors([10, 1]));
