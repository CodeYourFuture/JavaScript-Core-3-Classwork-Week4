module.exports = function addOne(numbers) {
  // let newArr = [];
  // /* Implement the function to make the tests pass */
  // numbers.forEach((number) => {
  //   newArr.push(number + 1);
  // });
  // return newArr;

  return numbers.map((item) => {
    return item + 1;
  });
};

test("Adds one to each item in the array", () => {});
