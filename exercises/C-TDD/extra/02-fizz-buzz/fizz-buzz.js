function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
    let array = [];
    if (n <= 0)
          return "";

    for (let i=1; i <= n; i++) {
         array.push ( (i % 15 === 0) ? "FizzBuzz" : 
                      (i %  3 === 0) ? "Fizz"     :
                      (i %  5 === 0) ? "Buzz"     :
                                      i);

    }
    return array.join(" ");
}  

module.exports = fizzbuzz;
