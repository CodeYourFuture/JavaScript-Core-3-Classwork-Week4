module.exports = function addOne(numbers) {
  /* Implement the function to make the tests pass */
  let nums = numbers.map((e) => (e += 1));
  return nums;
};
//console.log(addOne([1, 2]));
