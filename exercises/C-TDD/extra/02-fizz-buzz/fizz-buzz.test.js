var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("if n is 2 => [1, 2]", () => {
  // Arrange
  const n = 2;
  // Act
  const expected = [1, 2];
  // Assert
  
  const result = fizzbuzz(n)
  expect(result).toEqual(expected);
});

test("if n is 3 => [1, 2, 'Fizz']", () => {
  // Arrange
  const n = 3;
  // Act
  const expected = [1, 2, 'Fizz'];
  // Assert

  const result = fizzbuzz(n);
  expect(result).toEqual(expected);
});

test("if n is 5 => [1, 2, 'Fizz', 4, 'Buzz']", () => {
  // Arrange
  const n = 5;
  // Act
  const expected = [1, 2, 'Fizz', 4, 'Buzz'];
  // Assert

  const result = fizzbuzz(n);
  expect(result).toEqual(expected);
});

test("if n is 5 => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']", () => {
  // Arrange
  const n = 15;
  // Act
  const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];
  // Assert

  const result = fizzbuzz(n);
  expect(result).toEqual(expected);
});
