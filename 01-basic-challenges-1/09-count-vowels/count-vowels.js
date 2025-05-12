function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').reduce((count, char) => {
    return count + (vowels.includes(char) ? 1 : 0);
  }, 0)
}

module.exports = countVowels;
