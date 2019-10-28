// console.log(`\nExercise 1\n`);

// const addition = () => {
//   let sum = 0;
//   for (let i = 0; i <= 20; i += 1) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(addition());

// console.log(`\nExercise 2\n`);

// const bottles = () => {
//   let bier = ["one", "two", "three", "four", "five"];
//   for (let i = 0; i < bier.length; i += 1) {
//     if (bier[i] === "one") {
//       console.log(`There is ${bier[i]} bottle of beer on the wall`);
//     } else {
//       console.log(`There are ${bier[i]} bottles of beer on the wall`);
//     }
//   }
// };

// bottles();

// console.log(`\nExercise 3\n`);

// const isEven = () => {
//   let isEven2 = 0;
//   for (let i = 0; i <= 20; i += 1) {
//     isEven2 = i;
//     if (isEven2 % 2 === 0) {
//       console.log(`${isEven2} is even`);
//     } else {
//       console.log(`${isEven2} is odd`);
//     }
//   }
// };

// isEven();

// console.log(`\nExercise 4\n`);

// const multiplication = () => {
//   for (let i = 0; i <= 10; i += 1) {
//     console.log(`${i} * 9 = ${i * 9}`);
//   }
// };
// multiplication();

// console.log(`\nBonus Ex 4\n`);

// const bonus = () => {
//   for (let i = 0; i <= 10; i += 1) {
//     console.log();
//     for (let j = 0; j <= 10; j += 1) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// };

// bonus();

// console.log(`\nExercise 5\n`);

// const grades = () => {
//   let myArr = [90, 60, 77, 81, 65];
//   let aVerage = 0;
//   for (let i = 0; i < myArr.length; i += 1) {
//     aVerage += myArr[i];
//   }
//   console.log(
//     `The average of the following grades:  90, 60, 77, 81, 65 is ${aVerage /
//       myArr.length}`
//   );
// };

// grades();
// console.log(`\nExercise 6\n`);
// const fizzBuzz = () => {
//   for (let i = 0; i < 100; i += 1) {
//     let numero = i;
//     if (i % 3 === 0) {
//       numero = `Fizz`;
//     }
//     if (i % 5 === 0) {
//       numero = `Buzz`;
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//       numero = `Fizzbuzz`;
//     }
//     console.log(numero);
//   }
// };

// fizzBuzz();

// console.log(`\nExercise 7\n`);

// const multOfThreeAndFive = () => {
//   let multOfThree = 0;
//   let multOfFive = 0;

//   for (let i = 0; i <= 1000; i += 1) {
//     if (i % 3 === 0) {
//       multOfThree += i;
//     } else if (i % 5 === 0) {
//       multOfFive += i;
//     }
//   }
//   let total = multOfThree + multOfFive;
//   console.log(`The sum of the multiple of 3 is ${multOfThree}`);
//   console.log(`The sum of the multiple of 5 is ${multOfFive}`);
//   console.log(`The result of the addition of both sums is ${total}`);
// };

// multOfThreeAndFive();

// console.log(`\nExercise 8 and Bonus\n`);

// const arrFriends = () => {
//   let friends = ["Pato", "Peto", "Pito", "Poto", "Roberto"];
//   for (let i = 0; i < friends.length; i += 1) {
//     console.log(
//       `Hello ${friends[i]}, you are at index ${i} of my friend's array`
//     );
//   }
// };
// arrFriends();

// console.log(`\nExercise 9\n`);

// const output1 = () => {
//   let str = "";
//   for (let i = 1; i <= 10; i += 1) {
//     str += i * 100 + " ";
//   }
//   console.log(str);
// };

// output1();
// console.log();
// const output2 = () => {
//   let out2 = 1;
//   let str = "";

//   for (let i = 1; i <= 8; i += 1) {
//     str += out2 + " ";
//     // out2 = out2 * 2;
//     out2 *= 2;
//   }
//   console.log(str);
// };

// output2();
// console.log();
// const output3 = () => {
//   let sum2 = 0;
//   let str = "";
//   for (let i = 0; i < 6; i += 1) {
//     str += sum2 + " ";
//     // sum2 = sum2 + 2;
//     sum2 += 2;
//   }
//   console.log(str);
// };

// output3();
// console.log();
// const output4 = () => {
//   let sum3 = 3;
//   let str = "";
//   for (let i = 1; i < 6; i += 1) {
//     str += sum3 + " ";
//     // sum3 = sum3 + 3;
//     sum3 += 3;
//   }
//   console.log(str);
// };

// output4();
// console.log();
// const output5 = () => {
//   let minus1 = 9;
//   let str = "";
//   for (let i = 0; i < 10; i += 1) {
//     str += minus1 + " ";
//     minus1 -= 1;
//   }
//   console.log(str);
// };

// output5();

// console.log(`\nExercise 10\n`);

// const isPalindrome = inStr => {
//   inStr = inStr.replace(/\W/g, "");
//   inStr = inStr.toLowerCase();
//   for (let i = 0; i < inStr.length; i += 1) {
//     if (inStr[i] !== inStr[inStr.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
//   return (
//     inStr ===
//     inStr
//       .split("")
//       .reverse()
//       .join("")
//   );
// };

// console.log(isPalindrome("tarrattarrat"));

// const dashPipe = () => {
//   for (let i = 0; i < 5; i += 1) {
//     let dashPalo = "";
//     if (i % 2 === 0) {
//       for (let j = 0; j < 5; j += 1)
//         if (j % 2 === 0) {
//           dashPalo += "-";
//         } else {
//           dashPalo += "|";
//         }
//     } else {
//       for (let j = 0; j < 5; j += 1)
//         if (j % 2 === 0) {
//           dashPalo += "|";
//         } else {
//           dashPalo += "-";
//         }
//     }
//     console.log(dashPalo);
//   }
// };

// dashPipe();

// OBJECTS

// 2 - Create an array of objects, where each object describes a book and has properties for the
// title(a string), author(a string), and alreadyRead(a boolean indicating if you read it yet).
// -Iterate through the array of books.For each book, log the book title and book author like so:
// “The Hobbit by J.R.R.Tolkien”.
// -Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you read it, log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, and if not,
// log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’

// const books = [
//   {
//     title: "Soplete",
//     author: "Peteco",
//     alreadyRead: false
//   },
//   { title: "Asterix", author: "Cantinflas", alreadyRead: true },
//   { title: "Paquita", author: "Andres", alreadyRead: false }
// ];

// function nameOfBook() {
//   for (let i = 0; i < books.length; i += 1) {
//     let bookInfo = `${books[i].title} by ${books[i].author}`;
//     console.log(bookInfo);
//     if (books[i].alreadyRead) {
//       console.log(`You already read ${bookInfo}`);
//     } else {
//       console.log(`You still need to read ${bookInfo}`);
//     }
//   }
// }

// nameOfBook();

// 1 - Write a function addSpeaker to add a speaker to the array of speakers.The speaker you add must be an object with a key of name and a value of whatever you’d like.
// 2 - Write a function addLanguage that adds a language to the languages object.The language object you add should have a key with the name of the language and the value
// of another object with a key of “hello” and a value of however you spell “hello” in the language you add.
// 3 - Write a function addCountry that adds a European country to the countries object(inside of the continents object, inside of the countries object).The country you add should be an object with the key
// as name of the country and the value as an object with the keys of “capital” and “population” and their respective values.

let nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
        hello: "Hola"
      },
      french: {
        hello: "Bonjour"
      }
    }
  },
  addSpeaker: function(nombre) {
    nestedObject.speakers.push({ name: nombre });
  },
  //   addLanguage: function() {
  //     nestedObject.data.languages.push({ german: { hello: "hallo" } });
  //   }
  set addLanguage(lang) {
    nestedObject.data.languages = Object.assign(
      nestedObject.data.languages,
      lang
    );
  },
  // set addContinent(cont) {
  //   nestedObject.data.continents = Object.assign(
  //     nestedObject.data.continents,
  //     cont
  //   );
  // },
  set addCountry(keys) {
    nestedObject.data.continents.europe.countries = Object.assign(
      nestedObject.data.continents.europe.countries,
      keys
    );
  }
};

nestedObject.addSpeaker("Roberto");
nestedObject.addLanguage = { german: { hello: "Hallo" } };
nestedObject.addCountry = { italy: { capital: "Rome", population: 60000000 } };

console.log(nestedObject.speakers);
console.log(nestedObject.data.languages);
console.log(nestedObject.data.continents.europe.countries);
// nestedObject.addContinent = { america };

nestedObject.addCountry = {
  spain: { capital: "Madrid", population: 45000000 }
};

console.log(`\nAdded new Country\n`);
console.log(nestedObject.data.continents.europe.countries);

// console.log(nestedObject.data.continents.america);

// 1 - Using a for loop, console.log all of the numbers in the primeNumbers array.
// 2 - Using a for loop, console.log all of the even Fibonnaci numbers.
// 3 - Console.log the value “second” inside the order array.
// 4 - Inside of the addSnack function there is a special keyword called this.What does
// the word this refer to inside the addSnack function?(edited)

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function(snack) {
      this.snacks.push(snack);
      return this;
    }
  },
  showPrime: function() {
    let str = "";
    let primeros = nestedData.innerData.numberData.primeNumbers;
    for (let i = 0; i < primeros.length; i += 1) {
      str += primeros[i] + " , ";
    }
    console.log(str);
  },
  showFibo: function() {
    let str = "";
    let fiboDido = nestedData.innerData.numberData.fibonnaci;
    for (let i = 0; i < fiboDido.length; i += 1) {
      if (fiboDido[i] % 2 === 0) {
        str += fiboDido[i] + " , ";
      }
    }
    console.log(str);
  }
};

console.log(`\nThe primeNumbers are\n`);
nestedData.showPrime();
console.log(`\nThe even Fibonnaci numbers are\n`);
nestedData.showFibo();
console.log();
console.log(nestedData.innerData.order[1]);
console.log();
nestedData.innerData.addSnack("oreo");
console.log(nestedData.innerData.snacks);

// OBJECTS EXAMPLES

//Object literal

// const person = {
//   name: "Peter",
//   lastname: "Cantalapiedra"
// }

// Object with the new keyword

// const person = new Object();
// person.name = "Peter";
// person.lastname = "Cantalapiedra";

const person = {
  persons: [
    { firstname: "Pato", age: 30, employed: false },
    { firstname: "Peto", age: 40, employed: true },
    { firstname: "Peteco", age: 18, employed: true },
    { firstname: "Astrid", age: 25, employed: false },
    { firstname: "Mauricio", age: 31, employed: true }
  ],
  hasAJob: function() {
    for (let i = 0; i < person.persons.length; i += 1) {
      if (person.persons[i].employed === true) {
        console.log(`${person.persons[i].firstname} has a job`);
      }
    }
  },
  noJobAndThirty: function() {
    for (let i = 0; i < person.persons.length; i += 1) {
      if (person.persons[i].age >= 30 && person.persons[i].employed === false) {
        console.log(`${person.persons[i].firstname} is over 30 and has no job`);
      }
    }
  }
};

console.log();
person.hasAJob();
console.log();
person.noJobAndThirty();
