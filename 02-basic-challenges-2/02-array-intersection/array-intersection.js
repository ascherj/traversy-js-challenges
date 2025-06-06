function arrayIntersection(a, b) {
  const result = [];

  for (const num of a) {
    if (b.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

module.exports = arrayIntersection;
