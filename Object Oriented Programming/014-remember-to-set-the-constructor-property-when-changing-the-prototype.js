function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("wow wow wow");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};