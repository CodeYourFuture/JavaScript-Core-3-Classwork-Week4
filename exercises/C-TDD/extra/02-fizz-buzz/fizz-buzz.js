function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  let result = "";
  for (i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result += " FizzBuzz";
      continue;
    } else if (i % 3 === 0) result += " Fizz";
    else if (i % 5 === 0) result += " Buzz";
    else result += " " + i;
  }
  return result.trim();
}

module.exports = fizzbuzz;
