const greet = require("./index");

/* Remember to begin with the tests */

test("should return the string Hello, my friend", () => {
  const name = "Bob";
  const expected = `Hello, ${name}.`;
  const result = greet(name);
  expect(result).toEqual(expected);
});

test("if name === null should return the string Hello, my friend", () => {
  const name = null;
  const expected = "Hello, my friend.";
  const result = greet(name);
  expect(result).toEqual(expected);
});

test("if uppercase should return the string HELLO JERRY!", () => {
  const name = "JERRY";
  const expected = "HELLO JERRY!";
  const result = greet(name);
  expect(result).toEqual(expected);
});

test("if the name are two names", () => {
  const name = ["Jill", "Jane"];
  const expected = "Hello, Jill and Jane.";
  const result = greet(name);
  expect(result).toEqual(expected);
});

test("if there are more than two names", () => {
  const name = ["Amy", "Brian", "Charlotte"];
  const expected = "Hello, Amy, Brian and Charlotte.";
  const result = greet(name);
  expect(result).toEqual(expected);
});
