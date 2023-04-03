function smallestCommons(arr) {
	// 使用 Array.sort(a, b) => a-b) 將陣列由小到大排列
	arr.sort((a, b) => a - b);

	// 新建一個陣列的參照，包含所有範圍的數字（這樣就不會改動到原陣列
	const range = [];
	for (let i = arr[0]; i <= arr[1]; i++) {
		range.push(i);
	}

	// 將 range 陣列內所有數字的最小公倍數（Least Common Multiple, LCM）一個一個算出來
	let lcm = range[0];
	for (let i = 1; i < range.length; i++) {
		const current = range[i];
		const gcd = calculateGCD(lcm, current);
		lcm = (lcm * current) / gcd;
	}

	return lcm;
}

// 最大公因數的公式（Greatest Common Divisor, GCD）：
function calculateGCD(a, b) {
	if (b === 0) {
		return a;
	} else {
		return calculateGCD(b, a % b);
	}
}

smallestCommons([1, 5]);
