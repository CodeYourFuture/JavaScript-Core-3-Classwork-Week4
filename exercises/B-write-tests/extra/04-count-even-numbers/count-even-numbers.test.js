const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  // Arrange
  const numbers = [2, 5, 7];
  // expect(countEvenNumbers([2,5,7])).toEqual([2])
  // Act
    const expected = "Even number count: 1";
  // Assert
   const output = countEvenNumbers(numbers);
  expect(output).toEqual(expected);
});

test("Should return message if there are no even numbers", () => {
  // expect(countEvenNumbers([1,5,6,7])).toEqual([1,5,7])
  // Arrange
  const numbers =[1, 3,5]
  // Act
  const expected = "There are no even numbers";
  const output = countEvenNumbers(numbers)
  // Assert
 expect(output).toEqual(expected);
});
