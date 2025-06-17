function maxSubarraySum(arr, k) {
  let maxSoFar = -Infinity;
  for (let i = 0; i < arr.length - k; i++) {
    const currentMax = arr.slice(i, i + k).reduce((sum, num) => sum + num);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
}

module.exports = maxSubarraySum;
