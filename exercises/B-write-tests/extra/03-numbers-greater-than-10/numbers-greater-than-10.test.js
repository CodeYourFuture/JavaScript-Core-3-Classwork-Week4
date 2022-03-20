const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  const input = [5, 6, 8, 22, 55, 88, 2, 7];
  const expectedResult = [22, 55, 88];
  const output = numbersGreaterThan10(input);
  expect(output).toEqual(expectedResult);
  // Arrange
  // Act
  // Assert
});
