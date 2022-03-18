const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  // Arrange
  const array = [4, 19, 59, 0, 100];
  const expectedResult = [19, 59, 100];
  
  // Act
  const output = numbersGreaterThan10(array);

  // Assert
  expect(output).toEqual(expectedResult);
});