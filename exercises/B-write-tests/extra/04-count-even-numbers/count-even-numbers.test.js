const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5, 6]

  const result = countEvenNumbers(numbers)
  // Act
  const expected = `Even number count: ${[2, 4, 6].length}`
  // Assert
  expect(result).toEqual(expected)
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const numbers = []
  const result = countEvenNumbers(numbers)
  // Act
  let expected = "There are no even numbers"
  // Assert
  expect(result).toEqual(expected)
});
