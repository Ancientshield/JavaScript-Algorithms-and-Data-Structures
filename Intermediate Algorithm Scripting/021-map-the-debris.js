function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const orbitalPeriods = [];

  for (let i = 0; i < arr.length; i++) {
    const avgAlt = arr[i].avgAlt;
    const a = earthRadius + avgAlt;
    const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
    const orbitalPeriod = Math.round(T);

    orbitalPeriods.push({ name: arr[i].name, orbitalPeriod });
  }

  return orbitalPeriods;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/*
在這段程式碼中，首先聲明常數 const GM 和 earthRadius。 然後創建一個名稱為 orbitalPeriods 的空 Array 來儲存結果。

接著使用 for 循環遍歷 Array 的每個元素，使用地球半徑 earthRadius 和平均高度 avgAlt 計算半長軸 a。用開普勒第三定律計算軌道周期 T。而 Math.round 將 T 取整為最接近的整數，並將結果儲存到 const orbitalPeriod 的常數中。（orbital Period：軌道週期）

最後，將帶有衛星名稱及其計算出的軌道週期組合成物件， push 到 orbitalPeriods 陣列，並在處理完所有元素後返回該陣列。
*/