const init = () => {
  const db = [];
  const api = [];
  const create = dbToArray => {
    db.push(dbToArray);
    return db.length;
  };
  api.push(create);
  return api;
};

const createInDb = init();

createInDb[0]("dog");
createInDb[0]("cat");
createInDb[0]("horse");
createInDb[0]("pajaro");
console.log(createInDb[0]("horse"));
