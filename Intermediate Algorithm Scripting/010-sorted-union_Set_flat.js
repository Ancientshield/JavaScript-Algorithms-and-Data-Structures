function uniteUnique(...arr) {
	return [...new Set(arr.flat())];
}

// use arrow function:
// const uniteUnique = (...arr) => [...new Set(arr.flat())];

// Set
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set
// const set1 = new Set([1, 2, 3, 4, 5, 5, 5]);
// console.log(...set1);
// 1 2 3 4 5

// flat
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// let arr1 = [1, 2, [3, 4]];
// arr1.flat();
// [1, 2, 3, 4]

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
