function Cat(name) {
	this.name = name;
}

Cat.prototype = {
	constructor: Cat,
	// eat: function() {
	//   console.log("nom nom nom");
	// }
};

function Bear(name) {
	this.name = name;
}

Bear.prototype = {
	constructor: Bear,
	// eat: function() {
	//   console.log("nom nom nom");
	// }
};

function Animal() {}

Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log('nom nom nom');
	},
};

// 透過定義 object 的 prototype，使得其他的 prototype 都有 eat function
// function 是一級公民，所以 function Animal() {} 會被 hosting 到最上方
