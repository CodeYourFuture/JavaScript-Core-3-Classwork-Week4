const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  expect(countEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual("Even number counts: 3");
  // Arrange
  // Act
  // Assert
});

test("Should return message if there are no even numbers", () => {
  expect(countEvenNumbers([1, 3, 5])).toEqual("There are no even numbers");
  // Arrange
  // Act
  // Assert
});
