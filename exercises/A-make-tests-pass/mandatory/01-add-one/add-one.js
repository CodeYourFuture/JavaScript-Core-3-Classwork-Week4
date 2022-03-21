module.exports = function addOne(numbers) {
  const expectedArray = numbers.map((number) => {
    return number + 1;
  });

  return expectedArray;
};
