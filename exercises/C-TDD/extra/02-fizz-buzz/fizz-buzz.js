function fizzbuzz(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 ? arr.push("fizz") : i % 5 === 0 ? arr.push("buzz") : arr.push(i)

  };
  return arr
}

module.exports = fizzbuzz;