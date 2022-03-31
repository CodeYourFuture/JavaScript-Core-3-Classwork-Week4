const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  // Arrange
  let numbersArray = [1, 5, 10, 12, 100];
  let expected = [12, 100];

  // Act
  let output = numbersGreaterThan10(numbersArray);

  // Assert
  expect(output).toEqual(expected);
});
