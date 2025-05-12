function titleCase(phrase) {
  return phrase
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((char, i) => i === 0 ? char.toUpperCase() : char)
        .join('')
    )
    .join(' ');
}

module.exports = titleCase;
