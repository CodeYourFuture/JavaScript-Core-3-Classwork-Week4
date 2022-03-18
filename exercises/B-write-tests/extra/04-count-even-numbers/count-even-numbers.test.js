const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  // Act
  // Assert
  const result = countEvenNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual("Even number count: 2");
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  // Act
  // Assert
  const result = countEvenNumbers([1, 3, 5]);

  expect(result).toEqual("There are no even numbers");
});
