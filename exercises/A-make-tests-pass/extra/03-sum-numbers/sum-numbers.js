module.exports = function sumNumbers(numbers) {
  /* Implement the function to make the tests pass */
  return [...numbers].reduce((acc, num) => {
    return acc + num;
  }, 0);
};
