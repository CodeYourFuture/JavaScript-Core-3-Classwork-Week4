// module.exports = function addOne(numbers) {
//   numbers.forEach((number, index) => {
//     return numbers[index] = number + 1;
//   });
//   return numbers;
// };

module.exports = function addOne(numbers) {
  return numbers.map((number) => number + 1);
};
