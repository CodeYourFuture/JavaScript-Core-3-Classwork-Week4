module.exports = function getWordLengths(someWords) {
  const wordsLength = someWords.map((words) => {
    return words.length;
  });
  return wordsLength;
};
