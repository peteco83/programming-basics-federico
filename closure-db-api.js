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

  const remove = delElement => {
    if (db[delElement]) {
      return db.splice(delElement, 1);
    } else {
      return `Error!!!!`;
    }
  };

  api.push(create, read, update, remove);
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
console.log("\nAfter adding a new element");
console.log(createInDb[2](9, "Peter"));
console.log(createInDb[1]());
console.log(createInDb[2](19, "Federico"));
console.log(createInDb[1]());
createInDb[3](3);
console.log("\nAfter delete index 3");
console.log(createInDb[1]());
