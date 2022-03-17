const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

/*
  Let's trace this piece of code - what is the value of result with this input?

  const numbers = [1, 5, 10, 12, 100]
  const result = numbersGreaterThan10(numbers);
*/

test("Number greater than 10", () => {
  const numbers = [1, 5, 10, 12, 100];
  const expected = [12, 100];

  const output = numbersGreaterThan10(numbers);

  expect(output).toEqual(expected);
});
