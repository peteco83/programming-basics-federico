// baby object

let person = {
  firstname: "Federico",
  lastname: "Ientile",
  age: "36",
  city: "Berlin",
  welcome: () => {
    return `Hey ${person.firstname}, you are ${person.age} and live in ${person.city}`;
  }
};

// getting the object keys
console.log(person.age, person.firstname, person.lastname);
// getting the object key which is a function
console.log(person.welcome());

//rewrite object key value
person.age = "40";
console.log(person.age);

// second baby object
let car = new Object();

car.color = "Red";
car.brand = "Ford";
car.old = "40";
car.add = (x, y) => {
  return x + y;
};

console.log(car.brand);
console.log(car.add(2, 3));
