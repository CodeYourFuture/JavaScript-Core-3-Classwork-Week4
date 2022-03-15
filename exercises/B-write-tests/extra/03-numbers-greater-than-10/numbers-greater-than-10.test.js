const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  const result = numbersGreaterThan10([1, 5, 10, 12, 100]);

  expect(result).toEqual([12, 100]);
});
