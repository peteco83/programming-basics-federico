const init = () => {
  const db = [];

  const create = dbToArray => {
    db.push(dbToArray);
    return db.length;
  };

  const read = () => {
    const dbCopy = [...db];
    return dbCopy;
  };
  const api = [create, read];
  return api;
};

const createInDb = init();

createInDb[0]("dog");
createInDb[0]("cat");
createInDb[0]("horse");
createInDb[0]("pajaro");
console.log(createInDb[0]("horse"));
console.log(createInDb[1]());
