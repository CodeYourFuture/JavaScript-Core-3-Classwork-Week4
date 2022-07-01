function fizzbuzz(n) {
  /* Implement the function to make the tests pass */
  let str = [];
  for(let x = 1; x<=n; x++){
    
    if(x % 5 === 0 && x % 3 === 0){
      str.push('FizzBuzz')
      
    }
    else if(x % 5 === 0 ){
      str.push('Buzz')
      
    }
    else if(x % 3 === 0){
       str.push('Fizz')
      
    } else{str.push(x)}
        
  }
  return str;
}

module.exports = fizzbuzz;
