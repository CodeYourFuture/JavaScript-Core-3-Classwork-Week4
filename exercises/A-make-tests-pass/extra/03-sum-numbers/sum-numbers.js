module.exports = function sumNumbers(numbers) {
  /* Implement the function to make the tests pass */
  //for(let i=0; i < numbers.length; i++){
  return numbers.reduce((a, b) => a + b);
};
