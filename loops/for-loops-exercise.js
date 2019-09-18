// Exercise 1
console.log(`First exercise:\n`);
const exercise1 = () => {
  let total = 0;
  for (let i = 1; i <= 20; i += 1) {
    total += i;
  }
  return total;
};
console.log(exercise1());

// Exercise 2
console.log(`\nSecond exercise:\n`);
const exercise2 = () => {
  let arr = ["one", "two", "three", "four", "five"];
  for (let i = 0; i < 5; i += 1) {
    if (arr[i] === "one") {
      console.log(`There is ${arr[i]} bottle of beer on the wall`);
    }

    console.log(`There are ${arr[i]} bottles of beer on the wall`);
  }
};
exercise2();

// Exercise 3
console.log(`\nThird exercise:\n`);
const exercise3 = () => {
  //   let numbers = 0;

  for (let i = 1; i <= 20; i += 1) {
    // numbers += 1;
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};
exercise3();

// Exercise 4
console.log(`\nFourth exercise:\n`);
const exercise4 = () => {
  for (let i = 0; i <= 10; i += 1) {
    console.log(`${i} * 9 = ${i * 9}`);
  }
};
exercise4();
// Bonus
console.log(`\nBonus:\n`);
const bonus = () => {
  for (let i = 0; i <= 10; i += 1) {
    console.log();
    for (let j = 0; j <= 10; j += 1) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};
bonus();

console.log(`\nExercise 5:\n`);
const exercise5 = () => {
  let array = [90, 60, 77, 81, 65];
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  console.log(`Average: ${total / array.length}`);
};
exercise5();

console.log(`\nExercise 6:\n`);

const exercise6 = () => {
  for (let i = 1; i <= 100; i += 1) {
    let number = i;
    if (i % 3 === 0 && i % 5 === 0) {
      number = "Fizzbuzz";
    } else if (i % 3 === 0) {
      number = "Fizz";
    } else if (i % 5 === 0) {
      number = "Buzz";
    }
    console.log(number);
  }
};

exercise6();

// Exercise 7
console.log(`\nExercise 7:\n`);
const exercise7 = () => {
  let multipleOfThree = 0;
  let multipleOfFive = 0;
  let total = 0;
  for (let i = 1; i <= 1000; i += 1) {
    if (i % 3 === 0) {
      multipleOfThree += i;
      //   console.log(`\nMultiple of 3:\n ${i}`);
    } else if (i % 5 === 0) {
      multipleOfFive += i;
      //   console.log(`\nMultiple of 5:\n ${i}`);
    }
  }

  total = multipleOfThree + multipleOfFive;
  console.log(`The sum of the multiples of 3 is ${multipleOfThree}`);
  console.log(`The sum of the multiples of 5 is ${multipleOfFive}`);
  console.log(`The sum of multiples of 3 and 5 is ${total}`);
};

exercise7();

//Exercise 8
console.log(`\nExercise 8:\n`);
const exercise8 = () => {
  let arr = ["Pablo", "Juana", "Monse", "Azul", "Leandro"];
  for (let i = 0; i < arr.length; i += 1) {
    console.log(`Hello ${arr[i]}!`);
  }
};
exercise8();

//Bonus
console.log(`\nBonus:\n`);
const bonus8 = () => {
  let arr = ["Pablo", "Juana", "Monse", "Azul", "Leandro"];
  for (let i = 0; i < arr.length; i += 1) {
    console.log(`${arr[i]} is at index ${i} of my friends array`);
  }
};
bonus8();
