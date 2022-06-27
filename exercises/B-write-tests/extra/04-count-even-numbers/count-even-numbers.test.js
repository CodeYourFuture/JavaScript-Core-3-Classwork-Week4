const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  // Act
  // Assert
  const input = [2, 4, 6, 8, 3, 5, 7, 9];
  const output = countEvenNumbers(input);
  const expected = `Even number count: 4`;
  expect(expected).toEqual(output);
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  // Act
  // Assert
  const input = [21, 42, 63, 84, 35, 56, 77, 98];
  const output = countEvenNumbers(input);
  const expected = `Even number count: 4`;
  expect(expected).toEqual(output);
});
test("Should return message if there are no even numbers", () => {
  // Arrange
  // Act
  // Assert
  const input = [21, 63, 35,77];
  const output = countEvenNumbers(input);
  const expected = "There are no even numbers";
  expect(expected).toEqual(output);
});
