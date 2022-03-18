const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  const numbersArray = [1, 5, 10, 12, 100];
  const result = numbersGreaterThan10(numbersArray);
  const expected = [12, 100]
  expect(result).toEqual(expected)
});
