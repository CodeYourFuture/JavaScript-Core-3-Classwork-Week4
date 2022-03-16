var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

// test("should return '1 2' if n is 2", () => {
//   // Arrange
//   const n = 2;
//   const result = fizzbuzz(n)
//   // Act
//   const expected = "1 2"
//   // Assert
//   expect(result).toEqual(expected)
// });
test("should return 'Fizz' if n is 3", () => {
  // Arrange
  const n = 3;
  const result = fizzbuzz(n)
  // Act
  const expected = "Fizz"
  // Assert
  expect(result).toEqual(expected)
});
test("should return 'Fizz' if n is 3", () => {
  // Arrange
  const n = 5;
  const result = fizzbuzz(n)
  // Act
  const expected = "Buzz"
  // Assert
  expect(result).toEqual(expected)
});

test("should return 'Fizz' if n is 3", () => {
  // Arrange
  const n = 15;
  const result = fizzbuzz(n)
  // Act
  const expected = "FizzBuzz"
  // Assert
  expect(result).toEqual(expected)
});
