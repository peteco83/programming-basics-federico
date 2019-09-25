const target = {
  name: "Federico",
  age: 36
};

const source = {
  name: "Peteco",
  city: "Berlin"
};

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget);
console.log(target);
