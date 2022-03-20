module.exports = function sumNumbers(numbers) {
  let total = 0;
  numbers.forEach(item => total += item);
  return total
}