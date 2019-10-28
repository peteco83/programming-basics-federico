// #1
const sixLetters = "Marcus";
console.log(sixLetters.length);
console.log(sixLetters[1]);
console.log(sixLetters[5]);

// #2

const language = "JavaScript";
console.log(language.length);
console.log(language[0]);
console.log(language[4]);

// #3
const walkDay = "I can walk in the park all day!";
console.log(walkDay.substring(18, 22));

//4

const language2 = "JavaScript";
console.log(language2.substring(3, 6));

//5
const world = "Hello World";
console.log(world.toUpperCase());

//6

const hello = "Hello Earthling";
console.log(hello.toLowerCase());

//7
const shoes = "nice shoes";
console.log(shoes.includes("n"));
console.log(shoes.includes("l"));

//8
console.log(language[0] + language + language[0]);

//9

console.log(language.substring(7, 10) + language + language.substring(7, 10));

//10
const container = "Java sucks!";
console.log(container.toUpperCase());
console.log(container.includes("Java"));

//11
const firstLetter = language[0];
const lastLetter = language[9];
const middle = language.substring(1, 9);
console.log(lastLetter + middle + firstLetter);

//12
const firstName = "Udo";
const city = "Oberammergau";
const job = "farmer";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);

//13
const fox = "the quick brown fox";
const foxFirst = fox[0];
console.log(foxFirst.toUpperCase() + fox.substring(1));
