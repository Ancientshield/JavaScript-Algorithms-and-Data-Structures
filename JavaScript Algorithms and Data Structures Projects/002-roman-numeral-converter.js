function convertToRoman(num) {
  const ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';

  for (let key in ROMAN_NUMERALS) {
    while (num >= ROMAN_NUMERALS[key]) {
      result += key;
      num -= ROMAN_NUMERALS[key];
    }
  }

  return result;
}


convertToRoman(36);