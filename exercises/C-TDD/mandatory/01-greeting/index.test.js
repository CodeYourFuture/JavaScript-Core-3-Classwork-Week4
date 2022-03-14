const greet = require("./index");

/* Remember to begin with the tests */

test("greet should add greeting and return name with greeting", () => {
  expect(`Hello, Mahri`).toEqual(greet("Mahri"));
});

test("greet should Hello, my Friend when name is null", () => {
  // Arrange
  expect("Hello, my friend.").toEqual(greet("null"));
});

test("greet should add greeting with Uppercase if name is upperCase and return name with greeting", () => {
  // Arrange
  let ifUppercase = "PETER";
  expect(`HELLO, ${ifUppercase}`).toEqual(greet("PETER"));
});
