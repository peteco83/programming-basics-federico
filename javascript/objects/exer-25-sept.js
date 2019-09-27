// // Easy one
// // 1 - Creating objects using the ‘new ’ keyword
// // 2 - Creating objects using literal notation
// // 3 - Creating objects using the object constructor
// // 4 - Adding properties to each object type
// // 5 - Adding methods to each object type

// //1

// let obj = new Object();

// obj.name = ["Roberto", "Carlos", "Lara", "Sandra"];
// obj.last = ["Cantalabria", "Suarez", "Petry", "Sorta"];
// obj.add = function() {
//   for (let i = 1; i < this.name.length && i < this.last.length; i += 1) {
//     return `${this.name[i]} ${this.last[i]}`;
//   }
// };

// //2

// let person1 = {
//   age: 30,
//   height: 160,
//   name: "Peteco"
//   add: function () {
//       return `His name is ${this.name} and is ${this.age} years old`
//   }
// };

// //3
// let person2 = {};

// Object.defineProperty(person2, "age", { value: 30 });
// Object.defineProperty(person2, "lastname", { value: "carabajal" });
// Object.defineProperty(person2, "ageAndLastname", {
//   get: function() {
//     return `His lastname is ${this.lastname} and he is ${this.age} years old`;
//   }
// });
// console.log(person2.lastname);
// console.log(person2.ageAndLastname);
// console.log(obj.add());

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

const person = {
  differentPersons: [
    {
      firstName: "Sandro",
      lastName: "DeAmerica",
      age: 30,
      employed: true
    },
    { firstName: "Roberto", lastName: "Galan", age: 44, employed: false },
    {
      firstName: "Peteco",
      lastName: "Carabajal",
      age: 55,
      employed: false
    },
    { firstName: "Laura", lastName: "Pausini", age: 70, employed: true },
    { firstName: "Patrick", lastName: "Petela", age: 23, employed: false }
  ]
};

const numberEmployed = () => {
  let output = 0;
  for (let i = 0; i < person.differentPersons.length; i += 1) {
    if (person.differentPersons[i].employed) {
      output += 1;
    }
  }
  return output;
};

const olderThanThirty = () => {
  for (let i = 0; i < person.differentPersons.length; i += 1) {
    if (
      person.differentPersons[i].age > 30 &&
      person.differentPersons[i].employed === false
    ) {
      console.log(person.differentPersons[i].firstName);
    }
  }
};

// console.log(person.differentPersons[0]);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.employed);

console.log(numberEmployed());

olderThanThirty();
