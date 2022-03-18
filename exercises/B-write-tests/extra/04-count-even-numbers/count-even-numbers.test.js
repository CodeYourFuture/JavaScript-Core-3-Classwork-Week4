const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

// test("Should return count of even numbers if there is at least one", () => {
//   // Arrange
//   let numbers = [1,2,3]
//   // Act
//   let expect = 1
//   let execute = countEvenNumbers(numbers)
//     // Assert
//   expect(execute).toEqual(expect)
// });

test("Should return message if there are no even numbers", () => {
  let numbers = [1, 1, 3];
  // Act
  let expects = 'No even number found'
  let execute = countEvenNumbers(numbers);
  // Assert
  expect(execute).toEqual(expects);
});
