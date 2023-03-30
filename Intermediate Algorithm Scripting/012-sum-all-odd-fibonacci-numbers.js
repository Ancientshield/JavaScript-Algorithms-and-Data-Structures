function sumFibs(num) {
  // Fn = Fn-1 + Fn-2 (n>=2)
  let n0 = 0;
  let n1 = 1;
  let n2 = 0;
  while(n1 <= num){
    if(n1 % 2 !== 0){
      n2 = n2 + n1;
    }
    n1 = n1 + n0;
    // 讓舊 n0 變成新 n0，例：0、1、1、2、3、5、8、13、21、34。
    n0 = n1 - n0;
  }
  return n2;
}

sumFibs(4);