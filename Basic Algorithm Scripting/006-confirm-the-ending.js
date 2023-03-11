function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  // or return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");