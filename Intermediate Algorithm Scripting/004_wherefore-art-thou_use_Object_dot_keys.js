function whatIsInAName(collection, source) {
  const arrKeys = Object.keys(source);
  return collection.filter((obj) => {
    return arrKeys.every((key) => {
      // console.log('a -',obj.hasOwnProperty(key)); 
      // console.log('b -',obj[key]);
      // console.log('c -',source[key]);
      // console.log('d -',key);
      // 要同時符合 a 有這個屬性且 b, c 要相等。
      return obj.hasOwnProperty(key) && (obj[key] === source[key]);
    })
  })
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });