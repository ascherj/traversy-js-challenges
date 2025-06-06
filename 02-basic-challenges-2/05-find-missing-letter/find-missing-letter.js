function findMissingLetter(letters) {
  const sortedCharCodes = letters
            .map(letter => letter.charCodeAt(0))
            .sort((a, b) => a - b);

  let lastCharCode = null;
  for (const charCode of sortedCharCodes) {
    if (lastCharCode === null) {
      lastCharCode = charCode;
      continue;
    }
    if (charCode - lastCharCode === 2) {
      return String.fromCharCode(charCode - 1);
    }
    lastCharCode = charCode;
  }
}

module.exports = findMissingLetter;
