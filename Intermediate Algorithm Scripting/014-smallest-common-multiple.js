function smallestCommons(arr) {
  // sort the array in ascending order
  arr.sort((a, b) => a - b);

  // create an array containing all the numbers in the range
  const range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  // find the least common multiple (LCM) of the numbers in the range
  let lcm = range[0];
  for (let i = 1; i < range.length; i++) {
    const current = range[i];
    const gcd = calculateGCD(lcm, current);
    lcm = (lcm * current) / gcd;
  }

  return lcm;
}

// helper function to calculate the greatest common divisor (GCD)
function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return calculateGCD(b, a % b);
  }
}

smallestCommons([1,5]);