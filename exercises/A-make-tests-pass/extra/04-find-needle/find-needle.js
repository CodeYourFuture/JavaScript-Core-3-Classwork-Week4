module.exports = function findNeedle(words, needle) {
  /* Implement the function to make the tests pass */
  let index;
  words.forEach((word, i) => {
    if (word === needle) {
      index = i;
    }
  });
  return index;
};
