module.exports = function addOne(numbers) {
  /* Implement the function to make the tests pass */
  const result = numbers.map((number) => ++number);
  return result;
};
