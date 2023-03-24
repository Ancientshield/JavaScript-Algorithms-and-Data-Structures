function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  return newArr.filter(i=> !arr1.includes(i) || !arr2.includes(i));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);