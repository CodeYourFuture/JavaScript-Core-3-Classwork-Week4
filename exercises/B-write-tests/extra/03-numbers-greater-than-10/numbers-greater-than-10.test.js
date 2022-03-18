const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  // Arrange
  const anArray = [1, 5, 10, 12, 100];
  let expectedOutput = [12, 100];
  // Act
  let result = numbersGreaterThan10(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);

});


test("Get numbers greater than 10", () => {
  // Arrange
  const anArray = [100, 12, 10, 5, 1];
  let expectedOutput = [100, 12];
  // Act
  let result = numbersGreaterThan10(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);

});

test("Neither Negative numbers nor Zero are greater than 10", () => {
  // Arrange
  const anArray = [-1, 0, -10, -12, -100];
  let expectedOutput = [];
  // Act
  let result = numbersGreaterThan10(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);

});

test("Empty array", () => {
  // Arrange
  const anArray = [];
  let expectedOutput = [];
  // Act
  let result = numbersGreaterThan10(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);

});


test("Should be a length of 5", () => {
  // Arrange
  const anArray = [];
  for (let i=1; i <= 5; i++) {
    anArray.push(Math.random()*100+10)
  }

  let expectedOutput = 5;
  // Act
  let result = numbersGreaterThan10(anArray).length;
  // Assert
  expect(result).toEqual(expectedOutput);

});