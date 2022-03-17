const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [23, 8, 67, 9, 50, 4, 6, 12, 31];
  const expected = "Even number count: 5";
  // Act
  const output = countEvenNumbers(numbers)
  // Assert
  expect(output).toEqual(expected)
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const numbers = [15, 89, 7, 5, 37, 11, 99, 53];
  const expected = "There are no even numbers";
  // Act
  const output = countEvenNumbers(numbers)
  // Assert
  expect(output).toEqual(expected);
});
