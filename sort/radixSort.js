// First, we need a couple of utility methods

// this assumes base 10 numbers
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}
// getDigit(1234, 0); // 4 (1s place)

function digitCount(num) {
  if (num === 0) return 1;
  // works with negative nums cuz of Math.abs()
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// digitCount(689123) // 6

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// mostDigits([234, 2, 123, 2342, 23, 64332]) // 5

// O(nk) time, O(n + k) space
// Now, we use those methods to sort radix style
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]); // [12, 23, 345, 2345, 5467, 9852]
