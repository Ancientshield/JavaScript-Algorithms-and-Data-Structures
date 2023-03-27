function translatePigLatin(str) {
  // ^ 有兩個意思，第一個是符合字串開頭，而在 [] 內的 ^ 為 "不包含"。
  // $1 為正規表達式內的第一個 ()，$2 為第二個 ()  
  return str.replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// 如果一個單詞以母音開頭，在單詞結尾加上「way」。
// 如果一個單詞以子音開頭，則將第一個子音或子音群移至單詞結尾，然後加上「ay」。

translatePigLatin("consonant");