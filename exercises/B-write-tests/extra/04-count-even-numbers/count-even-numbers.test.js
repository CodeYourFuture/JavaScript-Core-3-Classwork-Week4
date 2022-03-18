const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */
describe("requirement one", () => {
  test("Should return count of even numbers if there is at least one", () => {
    // Arrange
    const numbers = [1, 3, 5, 6, 10, 19, 14];
    // Act
    const result = countEvenNumbers(numbers);
    // Assert
    const expected = "Even number count: 3";
    expect(result).toEqual(expected);
  });
});
describe("requirement two", () => {
  test("Should return message if there are no even numbers", () => {
    // Arrange
    const numbers = [1, 3, 5, 7];
    // Act
    const result = countEvenNumbers(numbers);
    // Assert
    const expected = "There are no even numbers";
    expect(result).toEqual(expected);
  });
});
