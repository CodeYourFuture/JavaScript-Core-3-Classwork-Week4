function fizzbuzz(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    if(i % 3===0 && i % 5 === 0) string += "FizzBuzz"
    else if (i % 5 === 0) string += "Buzz";
    else if (i % 3 === 0) string += "Fizz";
    else string += i;
    string += " ";
  }
  return string.trim();
}
/* Implement the function to make the tests pass */

module.exports = fizzbuzz;

console.log(fizzbuzz(15));
