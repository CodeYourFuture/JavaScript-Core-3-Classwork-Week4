const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  const numbers = [2, 5, 7, 10, 12, 19];
  const expected = `Even number count: 3`;
  const output = countEvenNumbers(numbers);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});

test("Should return message if there are no even numbers", () => {
  const numbers = [3, 5, 7, 9, 11];
  const expected = "There are no even numbers";
  const output = countEvenNumbers(numbers);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});
