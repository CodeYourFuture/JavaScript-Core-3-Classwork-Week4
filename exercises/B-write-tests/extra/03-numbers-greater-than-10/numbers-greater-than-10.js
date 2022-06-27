/* Do not change this file */

function numbersGreaterThan10(numbersArray) {
  return numbersArray.filter((number) => number > 10);
}

module.exports = numbersGreaterThan10;

/*
  Let's trace this piece of code - what is the value of result with this input?

  const numbers = [1, 5, 10, 12, 100]
  const result = numbersGreaterThan10(numbers);
*/
