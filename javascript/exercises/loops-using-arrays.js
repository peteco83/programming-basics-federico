// 1. ** sumOfNumbers.** Create a program that adds up the numbers in an array(of at least 3 numbers).
// ** Bonus **: Print to screen both the sum and the product of these numbers.

const myArray = () => {
  let arrayOfNumbers = [5, 6, 2];
  let total = 0;
  let totalMult = 1;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    total += arrayOfNumbers[i];
    totalMult *= arrayOfNumbers[i];
  }
  return (
    `The result of the addition of the numbers of the array is ${total}` +
    `\nProduct: ${totalMult}`
  );
  //   console.log(`Product : ${totalMult}`);
};

console.log(myArray());