var add = function() {
  var counter = 0;
  return function() {
    counter += 1;
    return counter;
  };
};

var innerFunc = add();

console.log(innerFunc());
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
console.log(innerFunc());
