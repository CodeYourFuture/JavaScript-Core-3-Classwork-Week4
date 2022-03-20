var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2' if n is 2", () => {
  // Arrange
  const input = 2;
  const result = [1, 2];
  expect(fizzbuzz(input)).toEqual(result);
  // Act
  // Assert
});
test("Multiple 3 push fizz", () => {
  const input = 3;
  const expectedResult = [1, 2, "Fizz"];
  expect(fizzbuzz(input)).toEqual(expectedResult);
});
test("multiple 5 pushes buzz ", () => {
  const input = 5;
  const expectedResult = [1, 2, "Fizz", 4, "Buzz"];
  expect(fizzbuzz(input)).toEqual(expectedResult);
});
test("multiple 5 and 5 pushes FizzBuzz ", () => {
  const input = 15;
  const expectedResult = [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ];
  expect(fizzbuzz(input)).toEqual(expectedResult);
});
