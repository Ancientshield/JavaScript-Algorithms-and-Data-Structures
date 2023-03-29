function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

// use arrow function:
// const uniteUnique = (...arr) => [...new Set(arr.flat())];

// Set
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set

// flat
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);