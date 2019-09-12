const init = () => {
  const db = [];
  const api = [];
  const create = dbToArray => {
    db.push(dbToArray);
    return db.length;
  };

  const read = () => {
    const dbCopy = [...db];
  };
  api.push(create);
  api.push(read);
  return api;
};

const createInDb = init();

createInDb[0]("dog");
createInDb[0]("cat");
createInDb[0]("horse");
createInDb[0]("pajaro");
console.log(createInDb[0]("horse"));
