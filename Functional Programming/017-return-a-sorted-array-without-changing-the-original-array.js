const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let arr2 = [...arr];
  return arr2.sort((a,b)=> a-b);
  // Only change code above this line
}

nonMutatingSort(globalArray);