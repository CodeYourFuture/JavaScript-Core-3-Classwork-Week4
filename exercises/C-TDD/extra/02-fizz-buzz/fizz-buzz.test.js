var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */
describe("requirement one", () => {
  test("should return '1 2' if n is 2", () => {
    // Arrange
    const n = 2;
    // Act
    const result = fizzbuzz(n);
    // Assert
    const expected = "1 2";
    expect(result).toEqual(expected);
  });
});

describe("requirement two", () => {
  test("when passed an argument 3 should return the string 1 2 Fizz", () => {
    // Arrange
    const n = 3;
    // Act
    const result = fizzbuzz(n);
    // Assert
    const expected = "1 2 Fizz";
    expect(result).toEqual(expected);
  });
});

describe("requirement three", () => {
  test("when passed an argument 5 should return the string 1 2 Fizz 4 Buzz", () => {
    // Arrange
    const n = 5;
    // Act
    const result = fizzbuzz(n);
    // Assert
    const expected = "1 2 Fizz 4 Buzz";
    expect(result).toEqual(expected);
  });
});

describe("requirement four", () => {
  test("when passed an argument 15 should return the string 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz", () => {
    // Arrange
    const n = 15;
    // Act
    const result = fizzbuzz(n);
    // Assert
    const expected = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";
    expect(result).toEqual(expected);
  });
});