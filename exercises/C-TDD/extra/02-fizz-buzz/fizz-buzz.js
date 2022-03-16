function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  if(n % 3 === 0 && n % 5 === 0) return "FizzBuzz"
  if(n % 3 === 0) return "Fizz"
  if(n % 5 === 0) return "Buzz"
  return n;

}

module.exports = fizzbuzz;
