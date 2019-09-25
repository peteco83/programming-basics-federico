// // baby object

// let person = {
//   firstname: "Federico",
//   lastname: "Ientile",
//   age: "36",
//   city: "Berlin",
//   welcome: () => {
//     return `Hey ${person.firstname}, you are ${person.age} and live in ${person.city}`;
//   }
// };

// // getting the object keys
// console.log(person.age, person.firstname, person.lastname);
// // getting the object key which is a function
// console.log(person.welcome());

// //rewrite object key value
// person.age = "40";
// console.log(person.age);
// //a different way to call it
// console.log(person["age"]);

// // second baby object
// let car = new Object();

// car.color = "Red";
// car.brand = "Ford";
// car.old = "40";
// car.add = (x, y) => {
//   return x + y;
// };

// console.log(car.brand);
// console.log(car.add(2, 3));

// // other possibilities

// const person2 = {
//   name: {
//     first: "Ali",
//     last: "Doe",
//     randomname: () => {
//       return `I am ${person2.name.first}`;
//     }
//   },
//   age: 30
// };

// console.log(person2.name.first);
// console.log(person2.age);
// console.log(person2.name.last);
// console.log(person2.name.randomname());

// Tests

// let object3 = new Object();
// object3.forLoop = () => {
//   this.minus = 9;
//   this.str = "";

//   for (let i = 1; i <= 10; i += 1) {
//     this.str += this.minus + " ";
//     this.minus -= 1;
//   }
//   console.log(this.str);
// };
// object3.forLoop();

// // si se hace una copia o referencia de un objecto y luego se cambia se cambia el original y no la copia!!!!!!!!!!!!!!!1
