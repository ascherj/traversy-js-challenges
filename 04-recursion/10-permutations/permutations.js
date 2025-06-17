function permutations(s) {
  result = [];

  const helper = (stringSoFar, remaining) => {
    if (remaining.length === 0) {
      result.push(stringSoFar);
    }
    for (let char of remaining) {
      index = remaining.indexOf(char);
      const copy = Array.from(remaining);
      copy.splice(index, 1);
      helper(stringSoFar + char, copy);
    }
  };

  helper('', s.split(''));
  return result;
}

module.exports = permutations;
