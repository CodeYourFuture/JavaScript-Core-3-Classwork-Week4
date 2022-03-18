function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
    let result = "";

    for (let i = 1; i <= n; i++) {
      if (i % 5 == 0 && i % 3 == 0) {
        result += " FizzBuzz";
        continue;
      } else if (i % 3 == 0) {
        result += " Fizz";
        continue;
      } else if (i % 5 == 0) {
        result += " Buzz";
        continue;
      } else result += " " + i;
    }
    return result.trim();
  }


module.exports = fizzbuzz;
