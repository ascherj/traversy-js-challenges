function findMissingNumber(numbers) {
  sortedNums = numbers.sort((a, b) => a - b);
  lastNum = null;
  for (const num of sortedNums) {
    if (lastNum === null) {
      lastNum = num;
      continue;
    } else {
      if (num - lastNum === 2) {
        return num - 1;
      }
      lastNum = num;
    }
  }
}

module.exports = findMissingNumber;
