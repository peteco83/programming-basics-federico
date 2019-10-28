//1

const x = 17;
const z = 30;
console.log(`${x/z*100}%`);

//2 

const workingHours = 8+6+5+9+8+2+1+8.5+7+4;
const numberOfDays = 10;
const averageHours = (workingHours / numberOfDays);
console.log(`Noemy's average hours are: ${averageHours}`);

//3

/*let firstPart = 85 * 6;
let secondPart = 75+70+85+90+100;
console.log(`Score in the sixth test is ${firstPart-secondPart}`)
Another way:*/

const firstFiveTests = 75+70+85+90+100;
const finalAverage = 85;
const totalTests = 6;
const totalResult = finalAverage * totalTests;
const sixthTest = totalResult - firstFiveTests;
console.log(`The sixth test result: ${sixthTest}`)



//4 

const primero = 80
const segundo = 78
const primer1 = 80 * 9
const segun2 = 78 * 8
console.log(`James needs a minimum of ${(primer1-segun2)}% to get an 80% average`)

//5

const tip1 = 22.35 
const tip2 = 26.67
const tip3 = 35.92
let perc1 = 10/100
let perc2 = 15/100
let perc3 = 20/100
console.log(`Bill 1: EUR ${tip1 + (tip1*perc1)}`)
console.log(`Bill 2: EUR ${tip2 + (tip2*perc2)}`)
console.log(`Bill 3: EUR ${tip3 + (tip3*perc3)}`)

//6

const side = 4.74
console.log(`The perimeter of the square is ${side*4}cm`)

const sidea = 5
const sideb = 6
const sidec = 7
console.log(`The perimeter of the triangle is ${sidea+sideb+sidec}cm`)

let squareSide = 5
let squareArea = squareSide * squareSide
console.log(`The area of the square is ${squareArea}cm²`)

let cubeSide = 9
let cubeVolume = cubeSide * cubeSide * cubeSide
console.log(`The volume of the cube is ${cubeVolume}cm³`)

// 7 

let totalTickets = 6450
let ticket = 15
console.log(`${totalTickets/ticket} persons purchased a ticket`)

let income = 500
let weeksYear = 52
console.log(`Sylvia makes ${income*weeksYear} USD every year`)