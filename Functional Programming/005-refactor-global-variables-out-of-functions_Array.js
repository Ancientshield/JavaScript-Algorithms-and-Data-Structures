// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newArray = [...arr];
  newArray.push(bookName);
  return newArray;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newArray = [...arr];
  const book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {
    newArray.splice(book_index, 1);
    return newArray;
    // Change code above this line
  }
}

// Array 在 ram 中都是指向同一個 reference，所以必須 copy 一份新的來修改