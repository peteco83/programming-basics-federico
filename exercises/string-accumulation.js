let name = "Peter";
//3. Name has the value "Peter", and has not been changed or "reassigned".
name = "Susan";
console.log(name);
console.log(`Schm${name}`);

//4. Because I reassigned name with a new value

let coffee = 6;
console.log(`${name} regularly drinks ${coffee} cups of coffee per day.`);

let daysBeforeExam = 30;
console.log(
  `${name} drinks ${coffee} cups of coffee with ${daysBeforeExam} days before the exam`
);

coffee += 1;
daysBeforeExam -= 1;

console.log(
  `${name} drinks ${coffee} cups of coffee ${daysBeforeExam} days before the exam`
);

//12.

function schmozzler(name) {
  return name.push("Schm");
}
console.log(schmozzler("ozzler"));

// function nextInLine(arr, item) {
//     // Your code here

//     return item;  // Change this line
// }

// // Test Setup
// var testArr = [1, 2, 3, 4, 5];

// // Display Code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6)); // Modify this line to test
// console.log("After: " + JSON.stringify(testArr));
