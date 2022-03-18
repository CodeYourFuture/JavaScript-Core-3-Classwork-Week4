function sumNumbers(numbers) {
  /* Implement the function to make the tests pass */

  return numbers.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
}

module.exports = sumNumbers;
