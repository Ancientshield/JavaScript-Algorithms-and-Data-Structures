function sumPrimes(num) {
	function isPrime(num) {
		const sqrt = Math.sqrt(num);
		for (let i = 2; i <= sqrt; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}

	let sum = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}

sumPrimes(100);

// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// Eratosthenes 艾斯托拉色尼法
/* 
function sumPrimes(num) {
  let isPrime = Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}
*/
