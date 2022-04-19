module.exports = function addOne(numbers) {
 
  const result = numbers.map((number) => ++number);
  return result;
};