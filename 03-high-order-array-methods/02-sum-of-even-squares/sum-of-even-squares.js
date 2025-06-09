function sumOfEvenSquares(nums) {
  return nums
          .filter(num => num % 2 === 0)
          .map(num => num ** 2)
          .reduce((sum, num) => sum + num, 0);
}

module.exports = sumOfEvenSquares;
