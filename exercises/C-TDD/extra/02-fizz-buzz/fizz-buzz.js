function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  return Array.from({ length: n }, (_, i) => i + 1)
    .map((num) => {
      return num % 15 === 0 ? "FizzBuzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : num
    }).join(" ");
}

module.exports = fizzbuzz;
