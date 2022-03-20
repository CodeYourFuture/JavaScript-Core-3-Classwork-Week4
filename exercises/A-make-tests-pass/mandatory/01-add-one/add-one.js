module.exports = function addOne(numbers) {
  const arr = [];
  numbers.forEach(item => {
    item += 1;
    arr.push(item)
  })
  return arr
};