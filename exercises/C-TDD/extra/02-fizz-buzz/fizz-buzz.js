function fizzbuzz(n) {
  let answer = ''
 for(let i = 1; i <=n; i++) {
   let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  if (!output) output = i;
  if (i<n) output += ' ';
  answer += output
 }
 return answer
}

module.exports = fizzbuzz;
