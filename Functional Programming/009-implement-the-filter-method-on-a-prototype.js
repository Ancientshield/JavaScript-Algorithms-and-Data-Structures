Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  // 在物件上用 function 定義 this，this 會綁定在該物件上。 
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};