const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  // Arrange
  const numbersArray = [2, 6, 19, 34, 4, 90, 28, 12, 23, 9];
  const expected = [19, 34, 90, 28, 12, 23]
  // Act
  const output = numbersGreaterThan10(numbersArray);
  // Assert
  expect(output).toEqual(expected)
});
