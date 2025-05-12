function countOccurrences(word, target) {
  return word.split('').reduce((accum, char) => {
    return accum + (char === target ? 1 : 0);
  }, 0)
}

module.exports = countOccurrences;
