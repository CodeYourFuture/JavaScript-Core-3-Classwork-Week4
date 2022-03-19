var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2' if n is 2", () => {
  // Arrange
  const number = 2
  const expected = [1, 2]
  // Act
  const testFizzbuzz = fizzbuzz(number)
  // Assert
  expect(testFizzbuzz).toEqual(expected)
});

test("should return '1, 2, fizz' if n is 3" , () => {
  // Arrange
  const number = 3;
  const expected = [1, 2, "fizz"];
  // Act
  const testFizzbuzz = fizzbuzz(number);
  // Assert
  expect(testFizzbuzz).toEqual(expected);
});

test("should return '1, 2, fizz, 4, buzz' if n is 5", () => {
  // Arrange
  const number = 5;
  const expected = [1, 2, "fizz", 4, "buzz"];
  // Act
  const testFizzbuzz = fizzbuzz(number);
  // Assert
  expect(testFizzbuzz).toEqual(expected);
});

test("should return 'fizzbuzz' if n is 15", () => {
  // Arrange
  const number = 15;
  const expected = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"];
  // Act
  const testFizzbuzz = fizzbuzz(number);
  // Assert
  expect(testFizzbuzz).toEqual(expected);
});
