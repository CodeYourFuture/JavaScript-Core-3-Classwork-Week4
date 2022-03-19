function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  let result = [];
  
  for(let i = 1; i <= n; i++) {
    let print = "";
  
    if (i % 3 === 0) print += "fizz";
    if(i % 5 === 0) print += "buzz";
    if(!print) print = i;

    result.push(print);
  }
  
  return result;
}

module.exports = fizzbuzz;
