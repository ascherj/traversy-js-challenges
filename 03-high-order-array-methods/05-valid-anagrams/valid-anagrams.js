function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counts = {}

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    counts[char1] = (counts[char1] || 0) + 1;
    counts[char2] = (counts[char2] || 0) - 1;
  }

  for (let key in counts) {
    if (counts[key] !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = validAnagrams;
