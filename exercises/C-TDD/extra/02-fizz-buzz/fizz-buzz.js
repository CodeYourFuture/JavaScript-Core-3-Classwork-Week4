function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  let resultString = '';

  for(let i = 1; i <= n; i++){
    if(i % 3 === 0){
      resultString += "Fizz ";
    }else{

     resultString += i + " "; 
    }
  }
  return resultString.slice(0, -1);
}

module.exports = fizzbuzz;
