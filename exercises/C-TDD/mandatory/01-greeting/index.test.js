const greet = require("./index");

/* Remember to begin with the tests */
// 'Requirement 1: Write a method `greet(name)` that interpolates `name` in a simple greeting. For example, when `name` is "Bob", the method should return a string `"Hello, Bob."`.'

test("return hello bob", () => {
  // Arrange
  const name = "Bob";
  const expected = "Hello, Bob.";
  // Act
  const output = greet(name);
  // Assert
  expect(output).toEqual(expected);
});

// 'Requirement 2: Handle `nulls` by introducing a stand -in. For example, when name is`null`, then the method should return the string `"Hello, my friend."`'

test("return hello my friend if name is null", () => {
  const name = null;
  const expected = "Hello, my friend.";
  const output = greet(name);
  expect(output).toEqual(expected);
});

// 'Requirement 3: Handle shouting. When name is all uppercase, then the method should shout back to the user. For example, when `name` is `"JERRY"` then the method should return the string `"HELLO JERRY!"`'

test("return capitals if name is in capital", () => {
  const name = "JERRY";
  const expected = "HELLO JERRY!";
  const output = greet(name);
  expect(output).toEqual(expected);
});

// 'Requirement 4: Handle two names of input. When `name` is an array of two names, then both names should be printed. For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`'

test("handles two names", () => {
  const name = ["Jill", "Jane"];
  const expected = "Hello, Jill and Jane.";
  const output = greet(name);
  expect(output).toEqual(expected);
});

// 'Requirement 5: Handle an arbitrary number of `names` as input. When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian, and Charlotte."`'

test("handles more than two names", () => {
  const name = ["Amy", "Brian", "Charlotte"];
  const expected = "Hello, Amy, Brian and Charlotte.";
  const output = greet(name);
  expect(output).toEqual(expected);
});
