// console.log(`\nExercise 1\n`);

// const addition = () => {
//   let sum = 0;
//   for (let i = 0; i <= 20; i += 1) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(addition());

// console.log(`\nExercise 2\n`);

// const bottles = () => {
//   let bier = ["one", "two", "three", "four", "five"];
//   for (let i = 0; i < bier.length; i += 1) {
//     if (bier[i] === "one") {
//       console.log(`There is ${bier[i]} bottle of beer on the wall`);
//     } else {
//       console.log(`There are ${bier[i]} bottles of beer on the wall`);
//     }
//   }
// };

// bottles();

// console.log(`\nExercise 3\n`);

// const isEven = () => {
//   let isEven2 = 0;
//   for (let i = 0; i <= 20; i += 1) {
//     isEven2 = i;
//     if (isEven2 % 2 === 0) {
//       console.log(`${isEven2} is even`);
//     } else {
//       console.log(`${isEven2} is odd`);
//     }
//   }
// };

// isEven();

// console.log(`\nExercise 4\n`);

// const multiplication = () => {
//   for (let i = 0; i <= 10; i += 1) {
//     console.log(`${i} * 9 = ${i * 9}`);
//   }
// };
// multiplication();

// console.log(`\nBonus Ex 4\n`);

// const bonus = () => {
//   for (let i = 0; i <= 10; i += 1) {
//     console.log();
//     for (let j = 0; j <= 10; j += 1) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// };

// bonus();

// console.log(`\nExercise 5\n`);

// const grades = () => {
//   let myArr = [90, 60, 77, 81, 65];
//   let aVerage = 0;
//   for (let i = 0; i < myArr.length; i += 1) {
//     aVerage += myArr[i];
//   }
//   console.log(
//     `The average of the following grades:  90, 60, 77, 81, 65 is ${aVerage /
//       myArr.length}`
//   );
// };

// grades();
// console.log(`\nExercise 6\n`);
// const fizzBuzz = () => {
//   for (let i = 0; i < 100; i += 1) {
//     let numero = i;
//     if (i % 3 === 0) {
//       numero = `Fizz`;
//     }
//     if (i % 5 === 0) {
//       numero = `Buzz`;
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//       numero = `Fizzbuzz`;
//     }
//     console.log(numero);
//   }
// };

// fizzBuzz();

console.log(`\nExercise 7\n`);

const multOfThreeAndFive = () => {
  let multOfThree = 0;
  let multOfFive = 0;

  for (let i = 0; i <= 1000; i += 1) {
    if (i % 3 === 0) {
      multOfThree += i;
    } else if (i % 5 === 0) {
      multOfFive += i;
    }
  }
  let total = multOfThree + multOfFive;
  console.log(`The sum of the multiple of 3 is ${multOfThree}`);
  console.log(`The sum of the multiple of 5 is ${multOfFive}`);
  console.log(`The result of the addition of both sums is ${total}`);
};

multOfThreeAndFive();

console.log(`\nExercise 8 and Bonus\n`);

const arrFriends = () => {
  let friends = ["Pato", "Peto", "Pito", "Poto", "Roberto"];
  for (let i = 0; i < friends.length; i += 1) {
    console.log(
      `Hello ${friends[i]}, you are at index ${i} of my friend's array`
    );
  }
};
arrFriends();

console.log(`\nExercise 9\n`);

const output1 = () => {
  let str = "";
  for (let i = 1; i <= 10; i += 1) {
    str += i * 100 + " ";
  }
  console.log(str);
};

output1();
console.log();
const output2 = () => {
  let out2 = 1;
  let str = "";

  for (let i = 1; i <= 8; i += 1) {
    str += out2 + " ";
    // out2 = out2 * 2;
    out2 *= 2;
  }
  console.log(str);
};

output2();
console.log();
const output3 = () => {
  let sum2 = 0;
  let str = "";
  for (let i = 0; i < 6; i += 1) {
    str += sum2 + " ";
    // sum2 = sum2 + 2;
    sum2 += 2;
  }
  console.log(str);
};

output3();
console.log();
const output4 = () => {
  let sum3 = 3;
  let str = "";
  for (let i = 1; i < 6; i += 1) {
    str += sum3 + " ";
    // sum3 = sum3 + 3;
    sum3 += 3;
  }
  console.log(str);
};

output4();
console.log();
const output5 = () => {
  let minus1 = 9;
  let str = "";
  for (let i = 0; i < 10; i += 1) {
    str += minus1 + " ";
    minus1 -= 1;
  }
  console.log(str);
};

output5();

console.log(`\nExercise 10\n`);

const isPalindrome = inStr => {
  inStr = inStr.replace(/\W/g, "");
  inStr = inStr.toLowerCase();
  //   for (let i = 0; i < inStr.length; i += 1) {
  //     if (inStr[i] !== inStr[inStr.length - 1 - i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  return (
    inStr ===
    inStr
      .split("")
      .reverse()
      .join("")
  );
};

console.log(isPalindrome("tarrattarrat"));

const dashPipe = () => {
  for (let i = 0; i < 5; i += 1) {
    let dashPalo = "";
    if (i % 2 === 0) {
      for (let j = 0; j < 5; j += 1)
        if (j % 2 === 0) {
          dashPalo += "-";
        } else {
          dashPalo += "|";
        }
    } else {
      for (let j = 0; j < 5; j += 1)
        if (j % 2 === 0) {
          dashPalo += "|";
        } else {
          dashPalo += "-";
        }
    }
    console.log(dashPalo);
  }
};

dashPipe();
