const greet = require("./index");

/* Remember to begin with the tests */

test("Should return: Hello + name", () => {
  const result = greet("Bob");

  expect(result).toEqual("Hello Bob");
});

test("value is null", () => {
  const result = greet();

  expect(result).toEqual("Hello, my friend.");
});

test("Should all be in CAPS", () => {
  const result = greet("JERRY");

  expect(result).toEqual("HELLO JERRY");
});

test("Testing an array", () => {
  const result = greet(["Jill", "Jane"]);

  expect(result).toEqual("Hello Jill and Jane");
});
