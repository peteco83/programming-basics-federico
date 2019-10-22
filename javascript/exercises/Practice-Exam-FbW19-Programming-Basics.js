/**
 * Welcome to the practice exam for the Programming Basics module.
 * Give it your best, but also remember it's just practice :)
 *
 * Please ADD CODE but DO NOT REMOVE CODE.
 *
 * There are 8 questions, worth a total of 16 marks.
 *
 * This is just a practice, so there's no pass/fail assessment.
 *
 * The questions were designed to get progressively more challenging.
 * Read all the questions before beginning to solve them.
 *
 * Good luck!
 */

/**
 * Question 1 - Multiple of 100 - (1 mark)
 * ---------------------------------------
 *
 * Write a program that checks whether or not an integer is divisible by 100.
 *
 * Example input and expected output:
 * 1    ➞ false
 * 150  ➞ false
 * 1000 ➞ true
 * 100  ➞ true
 */

const one = integer => {
  // if (integer % 100 === 0) {
  //   return true;
  // }
  // return false;
  return integer % 100 === 0;
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 1:");
console.log(`Input: 1\t`, one(1));
console.log(`Input: 150\t`, one(150));
console.log(`Input: 1000\t`, one(1000));
console.log(`Input: 100\t`, one(100));

/**
 * Question 2 - 2D Array - (1 mark)
 * --------------------------------
 * 
 * Given a 2D Array, print each of the values on a new line.
 * 
 * Example input and expected output:
    [
        [1, 2, 3], 
        ['the', 'quick', 'brown', 'fox'], 
        [true, false]
    ]

  * ➞

    1
    2
    3
    the
    quick
    brown
    fox
    true
    false
 */

const two = outerArray => {
  // let str = "";
  for (let i = 0; i < outerArray.length; i += 1) {
    for (let j = 0; j < outerArray[i].length; j += 1) {
      console.log(outerArray[i][j]);
      // str += outerArray[i][j] + "\n"; // asi lo hice yo
    }
  }
  // console.log(str); //asi lo hice yo
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 2:");
const inputTwo = [[1, 2, 3], ["the", "quick", "brown", "fox"], [true, false]];
two(inputTwo);

/**
 * Question 3 - Sum of array values - (1 mark)
 * --------------------------------------------
 *
 * Write a program to calculate the sum of three elements of a given array of integers.
 * The length of the array must be 3.
 *
 * Example input and expected output:
 * [5, 10, 15]  ➞ 30
 * [-5, 10, 15] ➞ 20
 * [50, 0, 15]  ➞ 65
 */

const three = integers => {
  let total = 0;
  for (let i = 0; i < integers.length; i += 1) {
    total += integers[i];
  }
  return total;
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 3:");
console.log(`Input: [5, 10, 15]\t`, three([5, 10, 15]));
console.log(`Input: [-5, 10, 15]\t`, three([-5, 10, 15]));
console.log(`Input: [50, 0, 15]\t`, three([50, 0, 15]));

/**
 * Question 4 - City name beginning - (1 mark)
 * -------------------------------------------
 *
 * For a given city name, check whether it begins with 'Los' or 'New'.
 * If it does, display the city name. Otherwise display 'The city name does not begin with Los or New'.
 *
 * Example input and expected output:
 * 'Los Angeles'    ➞ 'Los Angeles'
 * 'New York City'  ➞ 'New York City'
 * 'Berlin'         ➞ 'The city name does not begin with Los or New'
 */

const four = city => {
  if (city.substring(0, 3) === "Los" || city.substring(0, 3) === "New") {
    return city;
  } else {
    return "The city name does not begin with Los or New";
  }
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 4:");
console.log(`Input: 'Los Angeles'\t`, four("Los Angeles"));
console.log(`Input: 'New York City'\t`, four("New York City"));
console.log(`Input: 'Berlin'\t\t`, four("Berlin"));

/**
 * Question 5 - Angles of a triangle - (2 marks)
 * ---------------------------------------------
 *
 * Given the size of two angles in a triangle, classify the third angle as 'obtuse', 'right' or 'acute'.
 *
 * All angles inside a triangle will add up to a total of 180.
 * An acute angle is smaller than 90 degrees.
 * A right angle is exactly 90 degrees.
 * An obtuse angle is greater than 90 degrees.
 *
 * For example: 11, 20 should return 'An obtuse angle is missing', since the missing angle would be 149 degrees, which is greater than 90.
 *
 * Example input and expected output:
 * 11, 20  ➞ 'An obtuse angle is missing'
 * 27, 59  ➞ 'An obtuse angle is missing'
 * 135, 11 ➞ 'An acute angle is missing'
 * 45, 45  ➞ 'A right angle is missing'
 */

const five = (firstAngle, secondAngle) => {
  if (180 - firstAngle - secondAngle < 90) {
    return "An acute angle is missing";
  } else if (180 - firstAngle - secondAngle > 90) {
    return "A obtuse angle is missing";
  }
  // } else if (180 - firstAngle - secondAngle > 90) {
  return "An right angle is missing";
  // }
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 5:");
console.log(`Input: 11, 20\t`, five(11, 20));
console.log(`Input: 27, 59\t`, five(27, 59));
console.log(`Input: 135, 11\t`, five(135, 11));
console.log(`Input: 45, 45\t`, five(45, 45));

/**
 * Question 6 - Accept a callback - (2 marks)
 * ------------------------------------------
 *
 * Part 1: You are given an array of integers and a predefined callback,
 * Write a function that calls that callback on each element of the source array
 * (each element of the source array should be passed to the callback as an argument).
 *
 * The function should return a new array of integers with each element calculated to the power of 2.
 *
 * Example input and expected output:
 * [1, 2, 3, 4, 5] ➞ [1, 4, 9, 16, 25]
 */

const six = (integers, callback) => {
  // let myArray = [];
  // for (let i = 0; i < integers.length; i += 1) {
  //   myArray.push(callback(integers[i]));
  // }
  // return myArray;
  return integers.map(callback);
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 6:");
const getSquare = value => Math.pow(value, 2);
console.log(six([1, 2, 3, 4, 5], getSquare));

/**
 * Question 7 - Write a callback - (4 marks)
 * ----------------------------------------
 *
 * Part 2: You are given the same array of integers,
 * but this timeyou must write the callback yourself
 * and call that callback on each element of the source array.
 *
 * The callback should return the square root of an integer
 * and return a floating point number to two decimal places.
 *
 * After calling your callback on each element of the source array,
 * your main function should return a new array of floating point numbers.
 *
 * Example input and expected output:
 * [1, 2, 3, 4, 5] ➞ [ 1, 1.41, 1.73, 2, 2.24 ]
 */

const seven = integers => {
  // let myArray = [];
  // for (let i = 0; i < integers.length; i++) {
  //   myArray.push(parseFloat(Math.sqrt(integers[i]).toFixed(2))); // ASI LO HICE YO PERO SIN CALLBACK!!! MOSTRAR A EVA
  // }
  // return myArray;

  // const callback = ;

  return integers.map(value => parseFloat(Math.sqrt(value).toFixed(2)));
};

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 7:");
console.log(seven([1, 2, 3, 4, 5]));

/**
 * Question 8 - Podcasters - (4 marks)
 * ----------------------------------
 *
 * The provided Podcaster class accepts a full name and the title of a podcast.
 * Take a look at the code below the class definition to see how instances are created.
 * (but you do not need to create any new instances yourself).
 *
 * Your task is to write a method called boast within the provided class block.
 *
 * The boast method should accept no arguments. It should return a string that includes the individual podcaster's first name only, and the title of their podcast.
 *
 * Example method calls and expected output:
 *
 * wes.boast() ➞ "I'm Wes and Syntax is the best podcast ever!"
 * saron.boast() ➞ "I'm Saron and Base.cs is the best podcast ever!"
 */

class Podcaster {
  constructor(fullName, podcastTitle) {
    this.fullName = fullName;
    this.podcastTitle = podcastTitle;
  }

  boast() {
    // return `I'm ${this.fullName   /// ASI LO HICE YO
    //   .split(" ")
    //   .slice(0, 1)
    //   .join(" ")} and ${this.podcastTitle} is the best podcast ever!`;
    return `I'm ${this.fullName.split(" ")[0]} and ${
      this.podcastTitle
    } is the best podcast ever!`;
  }
  //   let name = fullName.split(" "); I tried to create a variable but was not correct!!!
  // let firstName = splittedFullName[0];
}

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 8:");
const jonathan = new Podcaster("Jonathan Cutrell", "Developer Tea");
const saron = new Podcaster("Saron Yitbarek", "Base.cs");
const chris = new Podcaster("Chris Coyier", "Shop Talk Show");
const jeff = new Podcaster("Jeff Meyerson", "Software Engineering Daily");
const wes = new Podcaster("Wes Bos", "Syntax");
const courtland = new Podcaster("Courtland Allen", "Indie Hackers");

// console.log("Uncomment the lines below to test your method");
console.log(jonathan.boast());
// console.log(saron.boast());
// console.log(chris.boast());
// console.log(jeff.boast());
// console.log(wes.boast());
// console.log(courtland.boast());
