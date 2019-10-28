// 1.

const canDrive = 18;
const realAge = 16;
const ageCheck = (realAge >= canDrive) ? "Yes, you can drive! Hope you have a license" : "Nope, you're too young!";
console.log(ageCheck)

// 2.

const maxSpeed = 130;
const speed = 120;
const speedCheck = (speed >= maxSpeed) ? "You're going too fast - slow down!" : "You're driving below the speed limit";
console.log(speedCheck)

// 3.

const alcoholAge = 21;
const age = 30;
const allowedAge = (age <= alcoholAge)? "Here's some juice" : "Here's some wine";
console.log(allowedAge)

// 4.

const isStudent = "student";
const student = (isStudent === "student") ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(student)

// 5.

const timeOfDay = 18
const timeOfMorning = 12
const currentHour = (timeOfDay <= timeOfMorning) ? "Good Morning" : "Good Evening";
console.log(currentHour)

//another example

const morning = true;
const timeOfDay3 = (morning) ? "Good Morning" : "Good Evening";
console.log(timeOfDay3) 