function Dog(name) {
	this.name = name;
}

// Only change code below this line
Dog.prototype = {
	constructor: Dog,
	numLegs: 4,
	eat: function () {
		console.log('wow wow wow');
	},
	describe: function () {
		console.log('My name is ' + this.name);
	},
};

// function 的 constructor 跟 Object 的 prototype 不同。
