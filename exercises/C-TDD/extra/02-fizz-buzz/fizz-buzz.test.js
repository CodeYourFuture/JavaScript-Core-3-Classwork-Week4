var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2' if n is 2", () => {
  // Arrange
  const n = 2;
  const expectedOutcome = "1 2";
  // Act
  const outcome = fizzbuzz(n);
  // Assert
  expect(outcome).toEqual(expectedOutcome);
});

test("should return '1 2 Fizz' if n is 3", () => {
  // Arrange
  const n = 3;
  const expectedOutcome = "1 2 Fizz";
  // Act
  const outcome = fizzbuzz(n);
  // Assert
  expect(outcome).toEqual(expectedOutcome);
});

test("should return '1 2 Fizz 4 Buzz' if n is 5", () => {
  // Arrange
  const n = 5;
  const expectedOutcome = "1 2 Fizz 4 Buzz";
  // Act
  const outcome = fizzbuzz(n);
  // Assert
  expect(outcome).toEqual(expectedOutcome);
});


test("should return '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' if n is 15", () => {
  // Arrange
  const n = 15;
  const expectedOutcome =
    "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";
  // Act
  const outcome = fizzbuzz(n);
  // Assert
  expect(outcome).toEqual(expectedOutcome);
});