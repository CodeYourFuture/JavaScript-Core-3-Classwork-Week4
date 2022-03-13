module.exports = function addOne(numbers) {
  let copyOfArray = numbers;
 return copyOfArray.map((x) => x + 1);
};
