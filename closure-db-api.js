let init = () => {
  let db = [];
  let create = dbToArray => {
    db.push(dbToArray);
    return db.length;
  };
  return create;
};

const createInDb = init();

console.log(createInDb("dog"));
console.log(createInDb("cat"));
console.log(createInDb("horse"));
