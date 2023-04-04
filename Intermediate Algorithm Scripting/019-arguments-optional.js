function addTogether(...args) {
  const [a, b] = args;
  if (args.length === 1 && typeof a === 'number') {
    return n => {
      if (typeof n === 'number') {
        return a + n;
      }
    }
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}

addTogether(2,3);