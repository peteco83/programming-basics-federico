function Person(firstName, lastName, age) {
  // Person is a constructor. Siempre debería estar con mayúscula la primera letra
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.runKm = 0;
  this.marathon = function(km) {
    this.runKm += km;
  };
}

let persona = new Person("Federico", "Ientile", 36);
let persona2 = new Person("Monserrat", "Perez", 36);

const someProperty = "runKm";

console.log(
  `Hola me llamo ${persona.firstName} ${persona.lastName} y tengo ${persona.age} años`
);

console.log(
  `Hola me llamo ${persona.firstName} ${persona.lastName} y tengo ${
    persona.age
  } años y corri ${persona.marathon(42)}`
);

persona.marathon(12);
console.log(persona);
console.log(
  `Hola me llamo ${persona.firstName} ${persona.lastName}, tengo ${persona.age} años y corri ${persona.runKm} km`
);
persona2.marathon(21);
console.log(persona2);
console.log(
  `Hola me llamo ${persona2.firstName} ${persona2.lastName}, tengo ${persona2.age} años y corri ${persona2.runKm} km`
);
// Bracket syntax
console.log(persona[someProperty]);
