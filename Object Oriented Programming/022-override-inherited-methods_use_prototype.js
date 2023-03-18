function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function(){
  return `Alas, this is a flightless bird.`;
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/* 使用 Object.prototype 重新定義方法。 */

// function Animal() { }
// Animal.prototype.eat = function() {
//   return "nom nom nom";
// };
// function Bird() { }

// Bird.prototype = Object.create(Animal.prototype);

// Bird.prototype.eat = function() {
//   return "peck peck peck";
// };

// let duck = new Bird();
// duck.eat();

// duck => eat() 是定義在這裏嗎？ 不是。
// Bird => eat() 是定義在這裏嗎？ => 是的。 執行它並停止往上搜索。
// Animal => 這裏也定義了 eat() 方法，但是 JavaScript 在到達這層原型鏈之前已停止了搜索。
// Object => JavaScript 在到達這層原型鏈之前也已經停止了搜索。