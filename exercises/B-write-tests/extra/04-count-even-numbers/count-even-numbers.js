/* Do not change this file */

function countEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });

  if (evenNumbers.length > 0) {
    return `Even number counts: ${evenNumbers.length}`;
  } else {
    return "There are no even numbers";
  }
}

module.exports = countEvenNumbers;
