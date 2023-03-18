function Animal() {}
Animal.prototype.eat = function () {
	console.log('nom nom nom');
};

function Dog() {}

// Dog object inherits from Animal.
// 狗物件繼承動物物件（的 eat 方法）
Dog.prototype = Object.create(Animal.prototype);

// Dog's prototype constructor is set to Dog.
// 設定狗物件的 constructor 是他自己。
Dog.prototype.constructor = Dog;

// Add a bark() method to the Dog object.
// 用物件本身的 prototype 屬性再去定義物件自己的 function
Dog.prototype.bark = function () {
	console.log('Woof!');
};

// so that beagle can both eat() and bark().
let beagle = new Dog();
beagle.eat();
beagle.bark();
