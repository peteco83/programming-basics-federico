// const init = () => {

let newObject = new Object();
newObject.db = [];
newObject.api = [];
newObject.create = dbToArray => {
  newObject.db.push(dbToArray);
  return `New element added! The new length of the array is ${newObject.db.length}`;
};

newObject.read = () => {
  newObject.dbCopy = [...newObject.db];
  return newObject.dbCopy;
};

newObject.update = (index, newElement) => {
  if (newObject.db[index]) {
    return (newObject.db[index] = newElement);
  } else {
    return newObject.create(newElement);
  }
};

newObject.remove = delElement => {
  if (newObject.db[delElement]) {
    return newObject.db.splice(delElement, 1);
  } else {
    return `Error!!!!`;
  }
};

newObject.api.push(
  newObject.create,
  newObject.read,
  newObject.update,
  newObject.remove
);
{
  return newObject.api;
}

let createInDb = newObject.api[0];
let readDB = newObject.api[1];
let updateDb = newObject.api[2];
let removeDb = newObject.api[3];

console.log("\nAfter add 1 element");
createInDb("Hallo");
console.log(readDB());
createInDb("asd");
createInDb("asdads");
console.log("\nAdded other 2 elements");
console.log(readDB());
createInDb("dog");
createInDb("cat");
console.log("\nAdded other 2 elements");
console.log(readDB());
createInDb("horse");
updateDb(1, "first");
console.log("\nAfter Update with one element on index 1");
console.log(readDB());
console.log("\nAfter adding a new element");
console.log(updateDb(9, "Peter"));
console.log(readDB());
console.log(updateDb(19, "Federico"));
console.log(readDB());
removeDb(3);
console.log("\nAfter delete index 3");
console.log(readDB());
