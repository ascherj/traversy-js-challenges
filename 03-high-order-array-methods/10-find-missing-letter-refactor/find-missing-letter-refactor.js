function findMissingLetter(letters) {
  const missing = letters.find((letter, index) => {
    if (index === letters.length - 1) {
      return false;
    }
    const current = letter.charCodeAt(0);
    const next = letters[index + 1].charCodeAt(0);
    return next - current > 1;
  });
  return missing ? String.fromCharCode(missing.charCodeAt(0) + 1) : null;
}

module.exports = findMissingLetter;
