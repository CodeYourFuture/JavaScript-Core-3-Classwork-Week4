module.exports = function getWordLengths(someWords) {
  /* Implement the function to make the tests pass */
  const wordlength = someWords.map((word) => {
    return word.length;
  })
  return wordlength;
};
