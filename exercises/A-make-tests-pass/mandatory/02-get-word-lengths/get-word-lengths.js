module.exports = function getWordLengths(someWords) {
  /* Implement the function to make the tests pass */
  let result =[]
  someWords.forEach(element => result.push(element.length));
  return result
};
