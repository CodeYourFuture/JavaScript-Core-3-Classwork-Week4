module.exports = function addOne(numbers) {
  /* Implement the function to make the tests pass */
  let arr = [];
  numbers.forEach(num => {
    arr.push(num + 1);
  })
  return arr;
};
