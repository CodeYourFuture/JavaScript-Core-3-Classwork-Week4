const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  // Arrange
  // Act
  // Assert
  const numbers = [1, 5, 10, 12, 100];
  const result = numbersGreaterThan10(numbers);
  const expected = [12, 100];
  expect(expected).toEqual(result);
});
