const myObj = {
  name: "Peter",
  id: 654564504
};

console.log(myObj["name"]);

const yourObj = myObj;

yourObj.name = "Marlin";

console.log(myObj["name"]);

// Al estar los dos ubicados en el mismo lugar en la memoria cambian las propiedades para los dos.
