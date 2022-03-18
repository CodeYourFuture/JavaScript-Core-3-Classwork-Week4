var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2' if n is 2", () => {
  // Arrange
  const n = 2;
  const expectedOutput = '1 2';
  // Act
   let result = fizzbuzz(n);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("'fizzbuzz' returns the string '1 2 Fizz' when passed an argument 3", () => {
  // Arrange
  const n = 3;
  const expectedOutput = '1 2 Fizz';
  // Act
   let result = fizzbuzz(n);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("'fizzbuzz' returns the string '1 2 Fizz 4 Buzz' when passed an argument 5", () => {
  // Arrange
  const n = 5;
  const expectedOutput = '1 2 Fizz 4 Buzz';
  // Act
   let result = fizzbuzz(n);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("'fizzbuzz' returns the string '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' when passed an argument 15", () => {
  // Arrange
  const n = 15;
  const expectedOutput = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz';
  // Act
   let result = fizzbuzz(n);
  // Assert
  expect(result).toEqual(expectedOutput);
});

test("'fizzbuzz' returns FizzBuzz twice when passed an argument 30", () => {
  // Arrange
  const n = 30;
  const expectedOutput = `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ` +
                         `16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz`;
  // Act
   let result = fizzbuzz(n);
  // Assert
  expect(result).toEqual(expectedOutput);
});
