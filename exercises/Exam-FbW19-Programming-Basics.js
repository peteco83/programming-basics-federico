/**
 * Welcome to the practice exam for the Programming Basics module.
 * Give it your best, but also remember it's just an exam ;)
 *
 * Please ADD CODE but DO NOT REMOVE CODE.
 *
 * There are 8 questions, worth a total of 26 marks.
 * A passing grade is 8 marks.
 *
 * The questions were designed to get progressively more challenging.
 * Read all the questions before beginning to solve them.
 *
 * Good luck!
 */

/**
 * Question 1 - Odd or even - (2 marks)
 * ------------------------------------
 *
 * Write a program that checks whether a number is even or odd.
 * Return an object that includes both the input and result.
 *
 * Example input and expected output:
 * 3    ➞ { input: 3, result: 'odd' }
 * 146  ➞ { input: 146, result: 'even' }
 * 19   ➞ { input: 19, result: 'odd' }
 */

const one = integer => {
  if (integer % 2 === 0) {
    return { input: integer, result: "even" };
  } else {
    return { input: integer, result: "odd" };
  }
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 1:");
console.log("Input: 3\t", one(3));
console.log("Input: 146\t", one(146));
console.log("Input: 19\t", one(19));

/**
 * Question 2 - World Cup - (2 marks)
 * ----------------------------------
 *
 * Germany last won the World Cup on the 13th of July 2014.
 * Write a program that calculates how many total days have passed since this date.
 *
 * Example output:
 * "It's been X days since Germany won the World Cup"
 */

const two = () => {
  const dayOfToday = new Date("10/24/2019");
  const dayGermanyWonCup = new Date("07/13/2014");
  const differenceInTime = dayOfToday - dayGermanyWonCup;
  return `It's been ${differenceInTime /
    (1000 * 3600 * 24)} days since Germany won the World Cup`;
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 2:");
console.log(two());

/**
 * Question 3 - Capitalize initials - (3 marks)
 * --------------------------------------------
 *
 * You are given a full name as a lower-case string.
 * Convert every initial to uppercase and return a new string.
 *
 * Example input and expected output:
 * alan mathison turing     ➞ Alan Mathison Turing
 * linus benedict torvalds  ➞ Linus Benedict Torvalds
 */

const three = name => {
  return name
    .toLowerCase()
    .split(" ")
    .map(el => el.charAt(0).toUpperCase() + el.slice(1))
    .join(" ");
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 3:");
console.log("Input: 'alan mathison turing'\t\t", three("alan mathison turing"));
console.log(
  "Input: 'linus benedict torvalds'\t",
  three("linus benedict torvalds")
);

/**
 * Question 4 - Greater than ten - (3 marks)
 * -----------------------------------------
 *
 * From an array of integers, return an array of values that are larger than 10.
 *
 * Example input and expected output:
 * [12, 10, 89, 39] ➞ [ 12, 89, 39 ]
 * [-60, 3, 29, 11] ➞ [ 29, 11 ]
 * [0, 4, 8, 90]    ➞ [ 90 ]
 */

const four = integers => integers.filter(value => value > 10);

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 4:");
console.log("Input: [12, 10, 89, 39]\t", four([12, 10, 89, 39]));
console.log("Input: [-60, 3, 29, 11]\t", four([-60, 3, 29, 11]));
console.log("Input: [0, 4, 8, 90]\t", four([0, 4, 8, 90]));

/**
 * Question 5 - Suffixes - (3 marks)
 * ---------------------------------
 *
 * Given an array of words, remove the suffix (ending) from each word, and return the new words in a new array.
 * For this question, you can assume that the suffix will always be 2 letters long.
 * Do not modify the original array.
 *
 * Example input and expected output:
 *
 * [ 'cleverly', 'meekly', 'hurriedly', 'nicely' ]  ➞ ['clever', 'meek', 'hurried', 'nice']
 * [ 'newer', 'panderer', 'scooper' ]               ➞ ['new', 'pander', 'scoop']
 */

const five = words => words.map(el => el.substring(0, el.length - 2));

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 5:");
console.log("Input: ['cleverly', 'meekly', 'hurriedly', 'nicely']");
console.log("Output:", five(["cleverly", "meekly", "hurriedly", "nicely"]));
console.log("\nInput: ['newer', 'panderer', 'scooper']");
console.log("Output:", five(["newer", "panderer", "scooper"]));

/**
 * Question 6 - Working hours - (3 marks)
 * --------------------------------------
 * 
 * Given an array of objects where each object represents a day of work,
 * calculate how many hours (total) this person worked in the week.
 * Note: start time is always morning, end time is always afternoon.
 * 
 * Example input and expected output:
 * 
    [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12}
    ] ➞ 36
 * 
    [
        { day: 'Monday', start: 9, end: 19},
        { day: 'Tuesday', start: 8, end: 17},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 12},
        { day: 'Friday', start: 8, end: 20}
    ] ➞ 44
 */

const six = week =>
  week.reduce((accumulator, el) => {
    return accumulator + (el.end - el.start);
  }, 0);

// NOTE: I tried first with map but I could not get the addition with reduce and map together
//to work so then I tried with for loop but at the end I decided to
//use reduce only

//   const hoursPerDay = week.map(el => el.end - el.start);
//   return week.reduce(accumulator, el) => accumulator + (el.end - el.start), 0);

//   for (let i = 0; i < week.length; i++) {
//     hoursPerDay += ;
//   }
// };

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 6:");

const weekOne = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

const weekTwo = [
  { day: "Monday", start: 9, end: 19 },
  { day: "Tuesday", start: 8, end: 17 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 12 },
  { day: "Friday", start: 8, end: 20 }
];

console.log("Input:", weekOne, "\nOutput:", six(weekOne));
console.log("\nInput:", weekTwo, "\nOutput:", six(weekTwo));

/**
 * Question 7 - Squared odds - (4 marks)
 * -------------------------------------
 * Given an array of integers, write a function (or several functions) to achieve the following:
 * - first, square every number
 * - then, remove all results that are even
 * - finally, return an array of odd numbers.
 *
 * Example input and expected output:
 * [1, 2, 3, 4, 5]          ➞ [ 1, 9, 25 ]
 * [10, 20, 30, 40, 50]     ➞ []
 * [-3, -2, -1, 0, 1, 2, 3] ➞ [ 9, 1, 1, 9 ]
 */

const seven = integers =>
  integers.map(value => value * value).filter(value => value % 2 !== 0);

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 7:");
console.log("Input: [1, 2, 3, 4, 5]\t\t", seven([1, 2, 3, 4, 5]));
console.log("Input: [10, 20, 30, 40, 50]\t", seven([10, 20, 30, 40, 50]));
console.log(
  "Input: [-3, -2, -1, 0, 1, 2, 3]\t",
  seven([-3, -2, -1, 0, 1, 2, 3])
);

/**
 * Question 8 - PIN validation - (6 marks)
 * ---------------------------------------
 *
 * Given a PIN code as a string, write a program that validates it as follows:
 *
 * - The PIN code must be 4 digits long
 * - The PIN code's last digit should be even
 * - The PIN code should add up to at least 5
 * - The PIN code must consist of only numbers
 * - The PIN code should contain at least two different numbers
 *
 * Your program only needs to say whether or not the PIN is valid (return true or false).
 * You do not need to give the reasons for invalid PINs, but they're included below for your reference.
 *
 * Example input and expected output:
 *
 * '1112'   ➞ true
 * '1994'   ➞ true
 *
 * '12344'  ➞ false     (PIN is not four digits long)
 * '1235'   ➞ false     (last digit is odd)
 * '1110'   ➞ false     (sum is less than 5)
 * '1c24'   ➞ false     (PIN contains a non-numerical character)
 * '5555'   ➞ false     (PIN contains less than two different numbers)
 */

const eight = pin => {
  const strToArray = pin.split("").map(item => parseInt(item, 10));
  const sumOfTheNumbers = strToArray.reduce((accumulator, el) => {
    return accumulator + el;
  }, 0);
  //   for (let i = 0; i < strToArray.length; i++) {
  if (strToArray.length !== 4) {
    return false;
  } else if (strToArray[strToArray.length - 1] % 2 !== 0) {
    return false;
  } else if (strToArray.includes(NaN)) {
    return false;
  } else if (sumOfTheNumbers < 5) {
    return false;
  } else if (new Set(strToArray) !== strToArray.length) {
    return false;
  } else {
    return true;
  }
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 8:");
console.log("1112\t", eight("1112"));
console.log("1994\t", eight("1994"));
console.log("12344\t", eight("12344"));
console.log("1235\t", eight("1235"));
console.log("1110\t", eight("1110"));
console.log("1c24\t", eight("1c24"));
console.log("4444\t", eight("4444"));
