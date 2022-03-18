function fizzbuzz(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    if (output == "") output = i;

    result += output + " ";
  }
  return result.trim();
}

module.exports = fizzbuzz;
