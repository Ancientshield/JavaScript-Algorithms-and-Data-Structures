function destroyer(arr, ...removeArr) {
  return arr.filter(i=> !removeArr.includes(i));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);