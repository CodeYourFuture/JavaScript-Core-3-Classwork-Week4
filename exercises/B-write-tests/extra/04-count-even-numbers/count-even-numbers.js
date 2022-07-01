/* Do not change this file */

function countEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
  });

  if (evenNumbers.length > 0) {
    return `Even number count: ${evenNumbers.length}`;
  } else {
    return "No even number found";
  }
}

module.exports = countEvenNumbers;
