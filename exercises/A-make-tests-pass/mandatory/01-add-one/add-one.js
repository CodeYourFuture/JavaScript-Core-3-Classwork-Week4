module.exports = function addOne(numbers) {
  /* Implement the function to make the tests pass */
  // console.log("hhdhd")
  return numbers.map(number => {
    return number + 1;
  });

};
//module.exports working as an allowing to use this function in another file(for example in add-one.test)