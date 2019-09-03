// passing a primitive type means that you get its value

let season = "Summer";
let firstName = "Dawn";
console.log(firstName); //da el value que se le puso antes del cambio del nombre

//if the Value of season is passed in,
//that means that we can update firstName
// WITHOUT affecting season.
//

// if a REFERENCE to the variable season is assigned
// then any time we make updates to firstName,
// season will also be affected.
// Reference data types work

firstName = season;

console.log(season);
console.log(firstName);
console.log(`firstName ${firstna}`);
