// const almuerzos = [
//     {principal: 'arepa', postre: 'helado'},
//     {principal: 'pasta', postre: 'flan'},
//     {principal: 'pizza', postre: 'torta'}
//     {principal: 'asado', postre: 'helado'}
//     {principal: 'pasta', postre: 'gelatina'}
//     {principal: 'churrasco', postre: 'bombon suizo'}
//     {principal: 'pasta', postre: 'torta'}

// ];

const postreParaPlatosConPasta = almuerzo =>
  almuerzo.filter(el => el.principal === "pasta").map(el => el.postre);

console.log(
  postreParaPlatosConPasta([
    { principal: "arepa", postre: "helado" },
    { principal: "pasta", postre: "flan" },
    { principal: "pizza", postre: "torta" },
    { principal: "asado", postre: "helado" },
    { principal: "pasta", postre: "gelatina" },
    { principal: "churrasco", postre: "bombon suizo" },
    { principal: "pasta", postre: "torta" }
  ])
);
