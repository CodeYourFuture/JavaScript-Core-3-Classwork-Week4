module.exports = function getWordLengths(someWords) {
  /* Implement the function to make the tests pass */
  return someWords.forEach( word =>{
    return word.length;
  })
};
