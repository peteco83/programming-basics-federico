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

// 2. ** Hello Frien ** Create an array filled with your friends' and family's names.Loop over the array and greet each friend e.g.Hello Maria! Hello Mike! etc. **
// Bonus **: Print the indexes of each item in the array.Expected output example: Mike is at index 1 of my friends array.

const helloFriends = () => {
  let myArrayOfFriends = ["Patrick", "Peter", "Peteco", "Pato", "Pablo"];
  for (let i = 0; i < myArrayOfFriends.length; i += 1) {
    console.log(`Hello ${myArrayOfFriends[i]}`);
  }
};
helloFriends();
