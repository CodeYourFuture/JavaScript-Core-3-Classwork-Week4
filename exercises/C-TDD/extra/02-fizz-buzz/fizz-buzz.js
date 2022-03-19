function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  let result = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      return result += " FizzBuzz";
    } else if (i % 5 === 0) {
      return result += " Buzz";
    } else if (i % 3 === 0) {
      return result += " Fizz";
    } else {
      result += " " + i ;
    }
   
  }
   return result.trim();
}


module.exports = fizzbuzz;
