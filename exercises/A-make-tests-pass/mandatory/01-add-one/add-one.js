module.exports = function addOne(numbers) {
  /* Implement the function to make the tests pass */
  const newArray = numbers.map((number) => {
    return number + 1;
  });

  return newArray;
  
};
