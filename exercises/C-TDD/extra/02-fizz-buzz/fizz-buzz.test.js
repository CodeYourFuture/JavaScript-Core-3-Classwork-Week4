var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2 Fizz' if n is 3", () => {
  // Arrange
  let list = 3
  // Act
  let result = fizzbuzz(list)
  let expected = [1, 2, 'Fizz']
  // Assert
  expect(result).toEqual(expected)
});
test("should return '1 2 Fizz 4 Buzz' if n is 5", () => {
  // Arrange
  let list = 5;
  // Act
  let result = fizzbuzz(list);
  let expected = [1 ,2 ,'Fizz', 4, 'Buzz'];
  // Assert
  expect(result).toEqual(expected);
});
test("should return '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' if n is 15", () => {
  // Arrange
  let list = 15;
  // Act
  let result = fizzbuzz(list);
  let expected = [
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
  // Assert
  expect(result).toEqual(expected);
});
