const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [1,2,3,4,5,6,7,8];
  // Act
  const expected = countEvenNumbers(numbers)
  // Assert
   result = `Even number count: ${[4]}`;
  expect(result).toEqual(expected);
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const numbers = [1, 3, 5, 7];
  // Act
  const expected = countEvenNumbers(numbers);
  // Assert
  result = "There are no even numbers";
  expect(result).toEqual(expected);
});
