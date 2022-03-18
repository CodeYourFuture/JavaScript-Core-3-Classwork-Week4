module.exports = function sumNumbers(numbers) {
  /* Implement the function to make the tests pass */
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
};
