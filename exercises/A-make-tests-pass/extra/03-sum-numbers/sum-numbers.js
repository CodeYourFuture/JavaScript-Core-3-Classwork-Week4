module.exports = function sumNumbers(numbers) {
  /* Implement the function to make the tests pass */
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
  }
  return sum;
}
