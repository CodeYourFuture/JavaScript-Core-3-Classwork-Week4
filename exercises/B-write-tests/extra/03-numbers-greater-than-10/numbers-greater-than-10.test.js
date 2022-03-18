const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */
test("Get numbers greater than 10", () => {
  const numbers = [5, 7, 9, 10, 12, 14, 55];
  const expected = [12, 14, 55];
  const output = numbersGreaterThan10(numbers);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});
