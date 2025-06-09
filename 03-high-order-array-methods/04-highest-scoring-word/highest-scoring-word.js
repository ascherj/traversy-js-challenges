function highestScoringWord(str) {
  return str.split(/\s+/).reduce((highestScoringWord, word) => {
    const score = word.split('').reduce((wordScore, letter) => {
      return wordScore + letter.charCodeAt(0) - 96;
    }, 0);
    return score > highestScoringWord.score ? {word, score} : highestScoringWord;
  }, {word: '', score: 0}).word;
}

module.exports = highestScoringWord;
