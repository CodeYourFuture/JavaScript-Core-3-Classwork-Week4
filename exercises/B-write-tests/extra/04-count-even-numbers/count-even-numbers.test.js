const countEvenNumbers = require("./count-even-numbers");

/* Complete the tests */

test("Should return count of even numbers if there is at least one", () => {
    const myArray = [31, 57, 12, 5];
  const expected = `Even number count: 1`

  const output = countEvenNumbers(myArray);

  expect(output).toEqual(expected);
});

test("Should return message if there are no even numbers", () => {
  expect(countEvenNumbers([89, 67, 5])).toEqual('There are no even numbers')
});
