const bike = { make: "Decathlon", who: "Peter Decathlon", year: "2001" };

console.log("make" in bike);

delete bike.make;
if ("make" in bike) {
  console.log("yes");
} else {
  bike.make = "Aurorita";
}
console.log(bike.make);
