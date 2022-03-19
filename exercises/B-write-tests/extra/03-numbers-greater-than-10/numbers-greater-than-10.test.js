const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  // Arrange
  const numbers = [7, 10, 11, 12];
  const expected = [11 , 12];
  // Act
  const testNumbers = numbersGreaterThan10(numbers);
  // Assert
  expect(testNumbers).toEqual(expected);
});
