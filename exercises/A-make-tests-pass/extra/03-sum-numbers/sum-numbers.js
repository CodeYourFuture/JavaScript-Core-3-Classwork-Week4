module.exports = function sumNumbers(numbers) {
  /* Implement the function to make the tests pass */
let sumOfNumbers = numbers.reduce((previousValue, currentValue)=> previousValue + currentValue, 0 )
return sumOfNumbers;
}
//update