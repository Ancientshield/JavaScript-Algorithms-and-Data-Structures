function reverseString(str) {
  str = [...str].reverse().join('');
  return str;
}

reverseString("hello");