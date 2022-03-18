var fizzbuzz = require("./fizz-buzz");

/* Complete the tests */

test("should return '1 2' if n is 2", () => {
  expect(fizzbuzz(2)).toEqual("1 2")
});

test("should return '1 2 Fizz' if n is 3", () => {
  expect(fizzbuzz(3)).toEqual('1 2 Fizz')
});

test("should return '1 2 Fizz 4 Buzz Fizz' if n is 6", () => {
  expect(fizzbuzz(6)).toEqual('1 2 Fizz 4 Buzz Fizz')
});

test("should return '1 2 Fizz 4 Buzz Fizz 7 8 Fizz 10 11 Fizz' if n is 12", () => {
  expect(fizzbuzz(12)).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz')
});

test("should return '1 2 Fizz 4 Buzz' if n is 5", () => {
  expect(fizzbuzz(5)).toEqual('1 2 Fizz 4 Buzz')
});

test("should return '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' if n is 15", () => {
  expect(fizzbuzz(15)).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz')
});

