Array.prototype.myMap = function (callback) {
	const newArray = [];
	// Only change code below this line
	// 這裡的 this 是指 function，也就是 myMap
	this.forEach((currentValue, currentValueArrayIndex, currentValueArray) => {
		return newArray.push(
			callback(currentValue, currentValueArrayIndex, currentValueArray)
		);
	});
	// forEach 後面兩個參數就是 Array 的 index 與對應 Array index 的 value
	// 在每次 push 的時候，再呼叫 callback function
	// Only change code above this line
	return newArray;
};

/* 
arr.forEach(function callback(currentValue[, index[, array]]) {
  //your iterator
}[, thisArg]); 
*/
