function fizzbuzz(n) {
  let i=1;
  let result = ''
  while (i <= n) {
    
    if (i%15===0) {
      
     result += "FizzBuzz " 
      
    } else if (i%5===0) {
      result += "Buzz " 
    } else if (i%3 === 0) {
      result += "Fizz "
    }
    else {
      result += `${i} `
    }
    i++
  }
  return result.trimEnd()
}

module.exports = fizzbuzz;
