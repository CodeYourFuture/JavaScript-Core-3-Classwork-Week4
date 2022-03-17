var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("If n = 2 return '1 2'", () => {
  const n = 2;
  const expectedResultString = '1 2'
  // Arrange
  const actualResultString = fizzbuzz(n)
  expect(actualResultString).toEqual(expectedResultString)
  // Act
  // Assert
});

test("If n = 3 return '1 2 Fizz'", () => {
  const n = 3;
  const expectedResultString = "1 2 Fizz";
  // Arrange
  const actualResultString = fizzbuzz(n);
  expect(actualResultString).toEqual(expectedResultString);
  // Act
  // Assert
});
