const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  const result = numbersGreaterThan10([6, 10, -12, 28, 140]);

  expect(result).toEqual([28, 140]);
});
