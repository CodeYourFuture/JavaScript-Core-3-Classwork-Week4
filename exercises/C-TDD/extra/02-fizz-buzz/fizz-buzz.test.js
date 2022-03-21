var fizzbuzz = require("./fizz-buzz");
describe("requirement one", () => {
  test("should return '1 2' if n is 2", () => {
    const n = 2;
    const result = fizzbuzz(n);
    const expected = "1 2";
    expect(result).toEqual(expected);
  });
});

describe("requirement two", () => {
  test("when passed an argument 3 should return the string 1 2 Fizz", () => {
    const n = 3;
    const result = fizzbuzz(n);
    const expected = "1 2 Fizz";
    expect(result).toEqual(expected);
  });
});

describe("requirement three", () => {
  test("when passed an argument 5 should return the string 1 2 Fizz 4 Buzz", () => {
    const n = 5;
    const result = fizzbuzz(n);
    const expected = "1 2 Fizz 4 Buzz";
    expect(result).toEqual(expected);
  });
});

describe("requirement four", () => {
  test("when passed an argument 15 should return the string 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz", () => {
    const n = 15;
    const result = fizzbuzz(n);
    const expected =
      "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";
    expect(result).toEqual(expected);
  });
});
