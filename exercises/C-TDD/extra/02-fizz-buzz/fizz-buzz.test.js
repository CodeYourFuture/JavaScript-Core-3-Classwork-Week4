const fizzbuzz = require("./fizz-buzz");

test("should return '1 2' if n is 2", () => {
  expect(fizzbuzz(2)).toEqual("1 2");
});
test("'1 2 Fizz' when passed an argument 3", () => {
  expect(fizzbuzz(3)).toEqual("1 2 Fizz");
});
test("'1 2 Fizz 4 Buzz' when passed an argument 5.", () => {
  expect(fizzbuzz(5)).toEqual("1 2 Fizz 4 Buzz");
});
test("'1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' when passed an argument 15.", () => {
  expect(fizzbuzz(15)).toEqual(
    "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"
  );
});
