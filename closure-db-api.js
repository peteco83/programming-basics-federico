const init = () => {
  const db = [];
  const api = [];
  const create = dbToArray => {
    db.push(dbToArray);
    return `New element added! The new lenght of the array is ${db.length}`;
  };

  const read = () => {
    const dbCopy = [...db];
    return dbCopy;
  };

  const update = (index, newElement) => {
    if (db[index]) {
      return (db[index] = newElement);
    } else {
      return create(newElement);
    }
  };

  api.push(create, read, update);
  return api;
};

let createInDb = init();

console.log("\nAfter add 1 element");
createInDb[0]("Hallo");
console.log(createInDb[1]());
createInDb[0]("asd");
createInDb[0]("asdads");
console.log("\nAdded other 2 elements");
console.log(createInDb[1]());
createInDb[0]("dog");
createInDb[0]("cat");
console.log("\nAdded other 2 elements");
console.log(createInDb[1]());
createInDb[0]("horse");
createInDb[2](1, "first");
console.log("\nAfter Update with one element on index 1");
console.log(createInDb[1]());
console.log("\nShowing error");
console.log(createInDb[2](8, "Peter"));
