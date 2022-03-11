/* Do not change this file */

const sumNumbers = require("./sum-numbers");

test("Sum all numbers", () => {
  const numbers = [9, 23, 10, 3, 8];
  const expected = 53;

  const output = sumNumbers(numbers);

  expect(output).toEqual(expected);
});
