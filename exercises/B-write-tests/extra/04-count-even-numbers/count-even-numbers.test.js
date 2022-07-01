const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
  const numbers = [2, 6, 7, 8, 3];
  const num = 3;
  const expected = `Even number count: ${num}`;

  const output = countEvenNumbers(numbers);

  expect(output).toEqual(expected);
});

test("Should return message if there are no even numbers", () => {
  const numbers = [1, 5, 7, 11, 3];
  const expected = "There are no even numbers";

  const output = countEvenNumbers(numbers);

  expect(output).toEqual(expected);
});
