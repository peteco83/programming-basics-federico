// var nestedData = {
//   innerData: {
//     order: ["first", "second", "third"],
//     snacks: ["chips", "fruit", "crackers"],
//     numberData: {
//       primeNumbers: [2, 3, 5, 7, 11],
//       fibonnaci: [1, 1, 2, 3, 5, 8, 13]
//     },
//     addSnack: function(snack) {
//       this.snacks.push(snack);
//       return this;
//     },
//     showPrimeNum: function() {
//       let priNum = nestedData.innerData.numberData.primeNumbers;
//       for (let i = 0; i < priNum.length; i += 1) {
//         console.log(priNum[i]);
//       }
//     },
//     showFib: function() {
//       let fib = nestedData.innerData.numberData.fibonnaci;
//       for (let i = 0; i < fib.length; i += 1) {
//         if (fib[i] % 2 === 0) {
//           console.log(fib[i]);
//         }
//       }
//     }
//   }
// };

// console.log("First exercise:\n");
// nestedData.innerData.showPrimeNum();
// console.log("\nSecond exercise:\n");
// nestedData.innerData.showFib();
// console.log("\nThird exercise:\n");
// console.log(nestedData.innerData.order[1]);
// console.log("\nFourth exercise:\n");
// nestedData.innerData.addSnack("chocolate");
// console.log(nestedData.innerData.snacks);
// 1 - Using a for loop, console.log all of the numbers in the primeNumbers array.
// 2 - Using a for loop, console.log all of the even Fibonnaci numbers.
// 3 - Console.log the value “second” inside the order array.
// 4 - Inside of the addSnack function there is a special keyword called this.What does the word this refer to inside the addSnack function?(edited)

const obj = new Object();
obj.firstName = "Federico";
obj.secondName = "Jose";
obj.lastName = "Ientile";

const obj2 = {
  myArr: [
    {
      firstName: "Monserrat",
      secondName: "Maria",
      lastName: "Perez",
      middleName: true
    },
    { firstName: "Patrick", lastName: "Swaize", middleName: false }
  ],
  middleName: function() {
    for (let i = 0; i < obj2.myArr.length; i += 1) {
      if (obj2.myArr[i].middleName === true) {
        console.log(obj2.myArr[i]);
      } else if (obj2.myArr[i].middleName === false) {
        console.log(obj2.myArr[i]);
      }
    }
  }
};

obj2.middleName(true);
// Easy one
// 1 - Creating objects using the ‘new ’ keyword
// 2 - Creating objects using literal notation
// 3 - Creating objects using the object constructor
// 4 - Adding properties to each object type
// 5 - Adding methods to each object type

// ----------------------------------------------------------------------
//     Second one
// change this code to make it working: blush:
// const person;
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.employed);
// 1 - change what needed to ADD other more people to your array of objects, you need at lest 5 people
// 2 - Find how many people has a job
// 3 - display only the people are over 30 and has no job

const person1 = {
  firstName: "Peter",
  lastName: "Petela",
  age: 30,
  employed: true
};

const person2 = {
  firstName: "Patricio",
  lastName: "Caralho",
  age: 18,
  employed: false
};

const person3 = {
  firstName: "Leon",
  lastName: "Suarez",
  age: 40,
  employed: true
};

const person4 = {
  firstName: "Lautaro",
  lastName: "Bonin",
  age: 87,
  employed: false
};

const person5 = {
  firstName: "Peteco",
  lastName: "Carabajal",
  age: 39,
  employed: false
};

const person = [person1, person2, person3, person4, person5];

let output = 0;
const hasAJob = () => {
  for (let i = 0; i < person.length; i += 1) {
    if (person[i].employed === true) {
      output += 1;
    }
  }
};

hasAJob();
console.log(output);

const noJobOverThirty = () => {
  let myString = [];
  for (let i = 0; i < person.length; i += 1) {
    if (person[i].employed === false && person[i].age > 30) {
      myString.push(person[i].firstName);
    }
  }
  return `${myString and} is over 30 and has no job`;
};

console.log(noJobOverThirty());
