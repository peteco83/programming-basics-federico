/*let name = "Winston"
let totalLetters = name.length
let firstLetter = name[0]
let lastLetter = name[name.length -1]
console.log(`Hello ${name}.
Your name is ${totalLetters} letters long
The first letter of your name is ${firstLetter}, the last is ${lastLetter}.
If I wanted to be funny, I would call you Winschmoo`)*/

const name = "Winston Churchill"; //no deberia contar el espacio
const totalLetters = name.length;
const spaceCount = name.split(" ").length - 1;
const firstLetter = name[0];
const lastLetter = name[name.length - 1];
const Winschmoo = name.substring(0, 3);
console.log(`Hello ${name}.
Your name is ${totalLetters - spaceCount} letters long
The first letter of your name is ${firstLetter}, the last is ${lastLetter}.
If I wanted to be funny, I would call you ${Winschmoo}schmoo`);
