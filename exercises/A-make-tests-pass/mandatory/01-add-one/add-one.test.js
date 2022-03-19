/* Do not change this file */

const addOne = require("./add-one.js");

test("Adds 1 to each item in the array", () => {
  const numbers = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];

  const output = addOne(numbers);

  expect(output).toEqual(expected);
});
