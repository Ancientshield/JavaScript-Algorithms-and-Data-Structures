function findLongestWordLength(str) {
  // ...rest 貌似放在 function 內也可以展開
  // console.log(...str.split(' '));
  // console -> The quick brown fox jumped over the lazy dog
  return Math.max(...str.split(' ').map(n=>n.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");