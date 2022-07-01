const greet = require("./index");

/* Remember to begin with the tests */

test("", () => {
  const name = "Paul";
  const expected = "Hello,Paul";

  const output = greet(name);

  expect(output).toEqual(expected);
});

test("", () => {
  const name = null;
  const expected = "Hello, my friend";

  const output = greet(name);

  expect(output).toEqual(expected);
});

test("", () => {
  const name = "HENRY";
  const expected = "HELLO HENRY!";

  const output = greet(name);

  expect(output).toEqual(expected);
});

test("", () => {
  const name = ["Jill", "Jane"];
  const expected = "Hello, Jill and Jane.";

  const output = greet(name);

  expect(output).toEqual(expected);
});

test("", () => {
  const name = ["Amy", "Brian", "Charlotte"];
  const expected = "Hello, Amy, Brian, and Charlotte.";

  const output = greet(name);

  expect(output).toEqual(expected);
});
