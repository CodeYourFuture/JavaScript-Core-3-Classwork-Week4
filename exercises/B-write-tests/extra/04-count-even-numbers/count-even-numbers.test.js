const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const expected = "Even number count: 3";
  // Act
  const testNumbers = countEvenNumbers(numbers);
  // Assert
  expect(testNumbers).toEqual(expected);
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const numbers = [1, 3, 5, 7];
  const expected = "There are no even numbers";
  // Act
  const testNumbers = countEvenNumbers(numbers);
  // Assert
   expect(testNumbers).toEqual(expected);
});
