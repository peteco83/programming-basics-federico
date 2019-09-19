// // 1.

// let palos = "";

// // outer loop
// // for every row...
// for (let i = 0; i < 4; i += 1) {
//   palos = "";

//   // inner loop
//   // knit all the stitches
//   for (let j = 0; j < 5; j += 1) {
//     palos += "|";
//   }

//   console.log(palos);
// }

// // 2.

let dashPalo = "";

for (let i = 0; i < 3; i += 1) {
  dashPalo = "";
  if (i % 2 === 0) {
    for (let j = 0; j < 5; j += 1) {
      if (j % 2 === 0) {
        dashPalo += "-";
      } else {
        dashPalo += "|";
      }
    }
  } else {
    for (let j = 0; j < 5; j += 1) {
      if (j % 2 === 0) {
        dashPalo += "|";
      } else {
        dashPalo += "-";
      }
    }
  }
  console.log(dashPalo);
}
