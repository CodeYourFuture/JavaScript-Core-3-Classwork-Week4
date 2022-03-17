module.exports = function getWordLengths(someWords) {
  /* Implement the function to make the tests pass */
  let newArr = someWords.map((word) => word.split("").length);
  return newArr;
};
