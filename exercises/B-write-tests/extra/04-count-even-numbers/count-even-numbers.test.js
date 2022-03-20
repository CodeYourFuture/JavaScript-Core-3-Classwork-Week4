const countEvenNumbers = require("./count-even-numbers");

describe("requirement one", () => {
  test("Should return count of even numbers if there is at least one", () => {
    const numbers = [1, 3, 5, 6, 10, 19, 14];
    const result = countEvenNumbers(numbers);
    const expected = "Even number count: 3";
    expect(result).toEqual(expected);
  });
});

describe("requirement two", () => {
  test("Should return message if there are no even numbers", () => {
    const numbers = [1, 3, 5, 7];
    const result = countEvenNumbers(numbers);
    const expected = "There are no even numbers";
    expect(result).toEqual(expected);
  });
});
