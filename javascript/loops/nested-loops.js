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

// for (let i = 0; i < 5; i += 1) {
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

// Challenge

// const challenge = rows => {
//     const rows = [];
//     const stars = [' ', '*']

// }

const christmasTree = rows => {
  let space1 = " ";

  for (let i = 0; i < rows; i += 1) {
    space1 = " ";
    for (let j = rows; j > i; j -= 1) {
      space1 += "   ";
    }
    for (let k = 0; k <= i; k += 1) {
      space1 += " * ";
    }
    for (let j = 0; j < i; j += 1) {
      space1 += " * ";
    }
    console.log(space1);
  }

  // for (let i = 0; i < 2; i += 1) {
  //   space2 += "   ";
  // }
  // for (let i = 0; i < 3; i += 1) {
  //   space2 += " * ";
  // }
  // console.log(space2);
};

christmasTree(2);
