var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2' if n is 2", () => {
  // Arrange
  const number = 2;
  const expected = "1 2";
  // Act
  const output = fizzbuzz(number);
  // Assert
  expect(output).toEqual(expected);
});

test("should return '1 2 Fizz' if n is 3", () => {
  // Arrange
  const number = 3;
  const expected = "1 2 Fizz";
  // Act
  const output = fizzbuzz(number);
  // Assert
  expect(output).toEqual(expected);
});

test("should return '1 2 Fizz 4 Buzz' if n is 5", () => {
  // Arrang
  const number = 5;
  const expected = "1 2 Fizz 4 Buzz";
  // Act
  const output = fizzbuzz(number);
  // Assert
  expect(output).toEqual(expected);
});

test("should return '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' if n is 15", () => {
  // Arrang
  const number = 15;
  const expected = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";
  // Act
  const output = fizzbuzz(number);
  // Assert
  expect(output).toEqual(expected);
});
