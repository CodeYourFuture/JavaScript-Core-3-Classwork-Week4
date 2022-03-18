const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  //Arrange
  const numbersArray = [1, 5, 10, 12, 100];
  //Act
  const result = numbersGreaterThan10(numbersArray);
  //assert
  const actualOutput = [12,100];

  expect(result).toEqual(actualOutput);
});

  