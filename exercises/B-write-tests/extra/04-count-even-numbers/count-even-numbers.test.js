const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
    // Arrange
  const anArray = [2,4,8,10,11];
  let expectedOutput = `Even number count: 4`;
  // Act
  let result =   countEvenNumbers(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const anArray = [21,41,81,-101,11];
   let expectedOutput = 'There are no even numbers';
  // Act
  let result =  countEvenNumbers(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("Should return message if there is an empty folder", () => {
  // Arrange
  const anArray = [];
   let expectedOutput = 'There are no even numbers';
  // Act
  let result =  countEvenNumbers(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("Does it work for decimal numbers? Should return message: there are no even numbers", () => {
  // Arrange
  const anArray = [2.4,4.8,8.3,10.1,11.02];
  let expectedOutput = `There are no even numbers`;
  // Act
  let result =  countEvenNumbers(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("Does it work correctly for negative numbers?", () => {
  // Arrange
  const anArray = [-21,-41,-81,-101,-11];
  let expectedOutput = 'There are no even numbers';
  // Act
  let result =  countEvenNumbers(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("Does it work correctly for ZERO & negative numbers?", () => {
  // Arrange
  const anArray = [-21,-41,-81,0, -101,-11];
  let expectedOutput = `Even number count: 1`;
  // Act
  let result =  countEvenNumbers(anArray);
  // Assert
  expect(result).toEqual(expectedOutput);
});