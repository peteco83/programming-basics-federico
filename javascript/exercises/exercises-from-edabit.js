// // cityFacts({
// //   name: "Tokyo",
// //   population: "13,929,286",
// //   continent: "Asia"
// // });

// // function cityFacts(city) {
// //   return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
// // }

// // console.log(cityFacts(cityFacts.name));

// function monthName(num) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];
//   return months[num - 1];
// }

// console.log(monthName(13));

// function volumeOfBox(sizes) {
//   return sizes.length * sizes.width * sizes.height;
// }

// console.log(volumeOfBox({ length: 10, width: 5, height: 5 }));

// function getDay(day) {
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];
//   var date = new Date(day);
//   return days[date.getDay()];
// }

// console.log(getDay("10/15/2019"));

// function days(month, year) {
//   return new Date(year, month, 0).getDate();
// }

// console.log(days(2, 2012));

// Create a function that converts dates from one of five string formats:

// "January 9, 2019"(MM D, YYYY)
// "Jan 9, 2019"(MM D, YYYY)
// "01/09/2019"(MM / DD / YYYY)
// "01-09-2019"(MM - DD - YYYY)
// "01.09.2019"(MM.DD.YYYY)
// into an array with this format: [MM, DD, YYYY], where MM, DD, and YYYY are all integers.Using the example above:

// function convertDate(date) {
//   let d = new Date(date);

//   return [d.getMonth() + 1, d.getDate(), d.getFullYear()];
// }

// console.log(convertDate("January, 1, 1980"));

// function match(s1, s2) {
//   if (s1.toLowerCase() === s2.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(match("Peter", "PeTER"));

// function negate(arr) {
//   return arr.map(x => -x);
// }

// console.log(negate([0, 5, 2, 3]));

// https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

const objectToArray = obj => {
  // const myObject = Object.entries(obj);
  const myArray = [];
  for (let prop in obj) {
    myArray.push([prop, obj[prop]]);
  }
  return myArray;
};

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3
  })
);
console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })
);

// https://edabit.com/challenge/AP4hnF97anRc2mAZ6

const keysAndValues = obj => {
  const myArr = [];
  const mySecondArr = [];
  const theKeys = Object.keys(obj);
  const theValues = Object.values(obj);

  for (let i = 0; i < theKeys.length; i += 1) {
    myArr.push(theKeys[i]);
    mySecondArr.push(theValues[i]);
  }

  // for (let i = 0; i < theValues.length; i += 1) {

  // }

  return [myArr, mySecondArr];
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

// https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

//unquote and use run to test these cases
let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());

class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

let p = new Rectangle(4, 5);
console.log(p.getArea());
console.log(p.getPerimeter());

// Write a function that returns true if a hash contains the specified key, and false otherwise.

//   Examples
// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

function hasKey(obj, key) {
  for (let i in obj) {
    if (i === key) {
      return true;
    }
  }
  return false;
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "c"));

function addUp(num) {
  let peteco = 0;
  for (let i = 0; i <= num; i++) {
    peteco += i;
  }
  return peteco;
}

console.log(addUp(13));
