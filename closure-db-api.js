function init() {
  let db = [];
  function create(dbToArray) {
    let pushingPush = db.push(dbToArray);
    return db.length;
  }
  return create;
}
