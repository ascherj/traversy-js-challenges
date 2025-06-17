function numberRange(low, high) {
  if (low > high) {
    return [];
  }
  return [low].concat(numberRange(low + 1, high));
}

module.exports = numberRange;
