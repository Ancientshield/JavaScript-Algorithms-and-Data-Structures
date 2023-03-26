function spinalCase(str) {
  // 直接用 [A-Z] 有可能會造成切多次，所以要用問號判斷，當沒有空白跟底線時，用大寫來切
  // 例：spinalCase("thisIsSpinalTap") 應返回 this-is-spinal-tap。
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');