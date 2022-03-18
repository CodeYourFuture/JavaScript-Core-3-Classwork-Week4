const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [2];
  const expected = "Even number count: 1";
  // Act
  const output = countEvenNumbers(numbers);
  // Assert
  expect(output).toEqual(expected);
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const numbers = [1];
  const expected = "There are no even numbers";
  // Act
  const output = countEvenNumbers(numbers);
  // Assert
  expect(output).toEqual(expected);
});
