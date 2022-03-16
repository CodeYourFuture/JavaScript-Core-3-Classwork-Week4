module.exports = function sumNumbers(numbers) {
  /* Implement the function to make the tests pass */
  let sum = numbers.reduce((previousValue,currentValue)=>{
    return previousValue + currentValue;
  })
  return sum;
}
