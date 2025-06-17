function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + arraySum(arr);
}

module.exports = arraySum;
