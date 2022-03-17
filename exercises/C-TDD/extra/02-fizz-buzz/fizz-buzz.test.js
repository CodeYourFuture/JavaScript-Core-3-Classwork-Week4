var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2' if n is 2", () => {
  // Arrange
  const n = 2;
  const expected = "1 2";
  // Act
  const output = fizzbuzz(n);
  // Assert
  expect(output).toEqual(expected);
});

test("should return '1 2 Fizz' if n is 3", () => {
  const n = 3;
  const expected = "1 2 Fizz";
  const output = fizzbuzz(n);
  expect(output).toEqual(expected);
});

test("should return '1 2 Fizz 4 Buzz' if n = 5", () => {
  const n = 5;
  const expected = "1 2 Fizz 4 Buzz";
  const output = fizzbuzz(n);
  expect(output).toEqual(expected);
});

test("should return '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' if n = 15", () => {
  const n = 15;
  const expected = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";
  const output = fizzbuzz(n);
  expect(output).toEqual(expected);
});