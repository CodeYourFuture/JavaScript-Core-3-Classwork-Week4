function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      array.push("FizzBuzz");
      continue;
    }
    if (i % 5 === 0) {
      array.push("Buzz");
      continue;
    }
    if (i % 3 === 0) {
      array.push("Fizz");
      continue;
    }
    array.push(i);
  }
  return array;
}

module.exports = fizzbuzz;

//use .join(' ')
//i.toString()
