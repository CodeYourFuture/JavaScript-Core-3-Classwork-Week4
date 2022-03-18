function fizzbuzz(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        string += "FizzBuzz ";
      }else if (i % 5 === 0) {
        string += "Buzz ";
      }else if (i % 3 === 0) {
        string += "Fizz ";
      } else {
        string += i;
        string += " ";
      }
    }
    return string.trim();
  
}

module.exports = fizzbuzz;
