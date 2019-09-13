const init = () => {
  const db = [];
  const api = [];
  const create = dbToArray => {
    db.push(dbToArray);
    return db.length;
  };

  const read = () => {
    const dbCopy = [...db];
    return dbCopy;
  };

  const update = (index, newElement) => {
    if (db[index]) {
      return (db[index] = newElement);
    } else {
      return "ERRRORRRR";
    }
  };

  api.push(create, read, update);
  return api;
};

let createInDb = init();

createInDb[0]("Hallo");
console.log(createInDb[1]());
createInDb[0]("asd");
createInDb[0]("asdads");
console.log(createInDb[1]());
createInDb[0]("dog");
createInDb[0]("cat");
console.log(createInDb[1]());
createInDb[0]("horse");
console.log(createInDb[2](1, "first"));
console.log(createInDb[1]());
