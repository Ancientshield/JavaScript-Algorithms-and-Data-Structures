function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Dog object inherits from Animal.
Dog.prototype = Object.create(Animal.prototype);

// Dog's prototype constructor is set to Dog.
Dog.prototype.constructor = Dog;

// Add a bark() method to the Dog object.
Dog.prototype.bark = function() {
  console.log("Woof!");
};

// so that beagle can both eat() and bark(). 
let beagle = new Dog();
beagle.eat();
beagle.bark();