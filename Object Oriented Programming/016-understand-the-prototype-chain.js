function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

// While beagle is the subtype, Dog is the supertype for duck.
// Object is a supertype for both Dog and beagle.
// Object is a supertype for all objects in JavaScript.
// Any object can use the hasOwnProperty method.