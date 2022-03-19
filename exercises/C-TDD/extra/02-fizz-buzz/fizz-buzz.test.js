var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */
describe("requirement 1", ()=>{
test("should return '1 2' if n is 2", () => {
  // Arrange
  const n = 2;
  // Act
  const result = fizzbuzz(n);
  // Assert
  const actualOutput = "1 2";

expect(result).toEqual(actualOutput);
});

})

describe("requirement 2", () => {
  test("should return '1 2 Fizz' if n is 3", () => {
    // Arrange
    const n = 3;
    // Act
    const result = fizzbuzz(n);
    // Assert
    const actualOutput = "1 2 Fizz";

    expect(result).toEqual(actualOutput);
  });
});

describe("requirement 3", () => {
  test("should return '1 2 Fizz 4 Buzz' if n is 5", () => {
    // Arrange
    const n = 5;
    // Act
    const result = fizzbuzz(n);
    // Assert
    const actualOutput = "1 2 Fizz 4 Buzz";

    expect(result).toEqual(actualOutput);
  });
});

describe("requirement 4", () => {
  test("should return '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' if n is 15", () => {
    // Arrange
    const n = 15;
    // Act
    const result = fizzbuzz(n);
    // Assert
    const actualOutput = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";

    expect(result).toEqual(actualOutput);
  });
});