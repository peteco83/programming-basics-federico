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

const dbApi = init();

const createInDb = dbApi[0];
const readDB = dbApi[1];
const updateDb = dbApi[2];
const removeDb = dbApi[3];

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
