function sumAll(arr) {
  let i = Math.abs(arr[0] - arr[1]);
  let j = 0;
  if((arr[0] - arr[1])>0){
    j = arr[1];
  }else{
    j = arr[0];
  }
  let arr2 = [];
  for(let k = 1; k < i; k++){
    arr2.push(j+k);
  }
  let arr3 = arr2.concat(arr);
  return arr3.reduce((a,b)=>a+b);
}

sumAll([1, 4]);