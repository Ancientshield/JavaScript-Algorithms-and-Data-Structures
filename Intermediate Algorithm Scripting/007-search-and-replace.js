function myReplace(str, before, after) {
  return str.replace(before, (/^[A-Z]/.test(before) ? after=`${after[0].toUpperCase()}${after.substring(1)}` : after=`${after[0].toLowerCase()}${after.substring(1)}`));
}
// 如果 before 第一個字母為大寫，則 after 第一個字母也跟著大寫，反之。
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");