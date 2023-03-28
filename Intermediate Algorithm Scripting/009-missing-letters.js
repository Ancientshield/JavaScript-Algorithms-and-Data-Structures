function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const start = alphabet.indexOf(str[0]);
  const end = str.length;
  
  for(let i = start; i < start + end; i++){
    if(!str.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
  return undefined;
}

fearNotLetter("efghi");