function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = 13;
  let decodedStr = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const currentIndex = alphabet.indexOf(currentChar);

    if (currentIndex === -1) {
      decodedStr += currentChar;
    } else {
      const newIndex = (currentIndex + shift) % alphabet.length;
      decodedStr += alphabet[newIndex];
    }
  }

  return decodedStr;
}

rot13("SERR PBQR PNZC");

/*
rot13 函數使用 for 循環遍歷輸入字串中的每個字元。
如果當前字元不在字母表中，則將其原封不動地加到解碼字串中。
否則，計算當前字元在字母表中的索引，
並對照字母表的長度，增加位移 shift = 13，計算出新索引，若大於 26 則取餘數。
接著將對應於新索引的字串增加到解碼後的字串中。
（decodedStr += alphabet[newIndex];）
最後返回解碼後的字串。
*/