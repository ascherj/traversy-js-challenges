function maxSubarraySum(arr, k) {
  let maxSoFar = -Infinity;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSoFar = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSoFar = Math.max(windowSum, maxSoFar);
  }

  return maxSoFar;
}

module.exports = maxSubarraySum;
