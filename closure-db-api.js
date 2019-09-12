let init = () => {
  let db = [];
  let create = dbToArray => {
    db.push(dbToArray);
    return db.length;
  };
  return create;
};

const createInDb = init();

createInDb();
createInDb();
createInDb();
createInDb();
createInDb();
createInDb();
createInDb();
console.log(createInDb("horse"));
