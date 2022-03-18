const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [2, 5, 7];
  // expect(countEvenNumbers([2,5,7])).toEqual([2])
  // Act
    const expected = [2];
  // Assert
   const output = countEvenNumbers(numbers);
  expect(output).toEqual(expected);
});

test("Should return message if there are no even numbers", () => {
  expect(countEvenNumbers([1,5,6,7])).toEqual([1,5,7])
  // Arrange
  // Act
  // Assert
});
