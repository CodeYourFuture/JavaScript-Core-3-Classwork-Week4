const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [2,6,5,7];
  // Act
  const result = countEvenNumbers(numbers);
  // Assert
  const actualOutput = "Even number count: 2";

  expect(result).toEqual(actualOutput);
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const numbers = [3,5,7];
  // Act
  const result = countEvenNumbers(numbers);
  // Assert
  const actualOutput = "There are no even numbers";

  expect(result).toEqual(actualOutput);
});
