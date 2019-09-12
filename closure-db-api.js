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

  const update = (index, elem) => {
    if (db[index]) {
      return (db[index] = elem);
    } else {
      //   return "Error, there is no existing element at the given index!";
      //   return db.push(elem);
      return create(elem);
    }
  };

  api.push(create, read, update);
  return api;
};

let createInDb = init();

console.log(createInDb[0]("first"));
console.log(createInDb[0](2));
console.log(createInDb[0]("sun"));
console.log(createInDb[1]("new")); // from the outside(api) you can not add new element
console.log(createInDb[0]("other one"));
console.log(createInDb[1]()); // access to read
console.log(createInDb[2](0, "new elem"));
console.log(createInDb[2](10, 100));
console.log(createInDb[2](6, "100"));
console.log(createInDb[1]()); // access to read
