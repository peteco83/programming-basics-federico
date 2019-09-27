const obj = {
  counter: 0
};

Object.defineProperty(obj, "reset", {
  get: function() {
    this.counter = 0;
  }
});

Object.defineProperty(obj, "increment", {
  get: function() {
    this.counter += 1;
  }
});
Object.defineProperty(obj, "decrement", {
  get: function() {
    this.counter -= 1;
  }
});
Object.defineProperty(obj, "add", {
  set: function(value) {
    this.counter += value;
  }
});

Object.defineProperty(obj, "subtract", {
  set: function(value) {
    this.counter -= value;
  }
});

console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.add = 5;
console.log(obj.counter);
obj.subtract = 2;
obj.decrement;
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);
