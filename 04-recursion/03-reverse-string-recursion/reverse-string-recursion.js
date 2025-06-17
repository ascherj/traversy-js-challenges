function reverseString(s) {
  if (s === '') {
    return '';
  }
  return s[s.length - 1] + reverseString(s.slice(0, s.length - 1));
}

module.exports = reverseString;
