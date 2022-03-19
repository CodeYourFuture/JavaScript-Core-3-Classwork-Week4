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
  const expectedResult = [1, 2, "fizz"];
  expect(fizzbuzz(input)).toEqual(expectedResult);

})
test('multiple 5 pushes buzz ', () => {
  const input = 5;
  const expectedResult = [1, 2, "fizz", 4, "buzz"];
  expect(fizzbuzz(input)).toEqual(expectedResult);
});