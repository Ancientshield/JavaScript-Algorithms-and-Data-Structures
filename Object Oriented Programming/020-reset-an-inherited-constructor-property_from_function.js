function Animal() {}
function Bird() {}
function Dog() {}

// 先用 object.create 定義子物件的父物件
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// 再用 prototype.constructor 改變繼承的 constructor
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);
console.log(beagle.constructor);
// [Function: Bird]
// [Function: Dog]
