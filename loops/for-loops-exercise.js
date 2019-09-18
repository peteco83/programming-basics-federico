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
    console.log(`There are ${arr[i]} bottles of beer on the wall`);
  }
};
exercise2();
