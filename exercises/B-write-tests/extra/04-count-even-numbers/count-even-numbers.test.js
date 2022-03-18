const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const array = [2, 15, 71];
  const expectedResult = 'Even number count: 1';
  // Act
  const output = countEvenNumbers(array);
  // Assert
  expect(output).toEqual(expectedResult);
});

test("Should return message if there are no even numbers", () => {
  // Arrange
  const array = [1, 3, 7];
  const expectedResult = "There are no even numbers";
  // Act
  const output = countEvenNumbers(array);
  // Assert
  expect(output).toEqual(expectedResult); 
});
