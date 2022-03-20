const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const expectedResult = "Even number count: 4";
  const output = countEvenNumbers(input);
  expect(output).toEqual(expectedResult);
  // Arrange
  // Act
  // Assert
});

test("Should return message if there are no even numbers", () => {
  const input = [1, 9, 19, 77];
  const expectedResult = "There are no even numbers";
  const output = countEvenNumbers(input);
  expect(output).toEqual(expectedResult);
  // Arrange
  // Act
  // Assert
});
