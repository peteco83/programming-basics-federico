// // // 1.

// // let palos = "";

// // // outer loop
// // // for every row...
// // for (let i = 0; i < 4; i += 1) {
// //   palos = "";

// //   // inner loop
// //   // knit all the stitches
// //   for (let j = 0; j < 5; j += 1) {
// //     palos += "|";
// //   }

// //   console.log(palos);
// // }

// // // 2.

// let dashPalo = "";

// for (let i = 0; i < 3; i += 1) {
//   dashPalo = "";
//   if (i % 2 === 0) {
//     for (let j = 0; j < 5; j += 1) {
//       if (j % 2 === 0) {
//         dashPalo += "-";
//       } else {
//         dashPalo += "|";
//       }
//     }
//   } else {
//     for (let j = 0; j < 5; j += 1) {
//       if (j % 2 === 0) {
//         dashPalo += "|";
//       } else {
//         dashPalo += "-";
//       }
//     }
//   }
//   console.log(dashPalo);
// }

// const exerciseEstrellas = () => {
//   let estrellas = "";

//   for (let i = 0; i < 4; i += 1) {
//     for (let j = 0; j < 1; j += 1) {
//       estrellas += "*";
//     }

//     console.log(estrellas);
//   }
// };

// exerciseEstrellas();

<<<<<<< HEAD
const triangulo = () => {
  let estrellita = "";
  for (let i = 0; i < 10; i += 1) {
    for (let j = i; j => 0; j -= 1) {
      triangulo.append(j + " ");
=======
// Challenge

const christmasTree = rows => {
  for (let i = 0; i <= rows; i += 1) {
    let estrellas = "";
    for (let j = 0; j <= rows - i; j += 1) {
      estrellas += " ";
    }
    for (let k = 0; k < i; k += 1) {
      estrellas += "*";
>>>>>>> 5732ba24986bf2bd514e8292d9fedb752560c35a
    }
  }
  console.log(estrellita);
};

<<<<<<< HEAD
triangulo();
=======
christmasTree(3);
>>>>>>> 5732ba24986bf2bd514e8292d9fedb752560c35a
