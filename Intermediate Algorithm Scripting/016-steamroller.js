function steamrollArray(arr) {
  const flatArray = [].concat(...arr);
  // 用 some + isArray 判斷展開的的任一元素是否為 Array，如果是，則繼續用 callback function 展開。
  return flatArray.some(Array.isArray) ? steamrollArray(flatArray) : flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);