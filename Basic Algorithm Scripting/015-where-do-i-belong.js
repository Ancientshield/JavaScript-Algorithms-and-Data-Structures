function getIndexToIns(arr, num) {
  let arr2 = arr.sort((a,b)=>a-b);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] >= num) return i;
  }
  return arr2.length;
}

getIndexToIns([40, 60], 50);