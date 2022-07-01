const greet = require("./index");

/* Remember to begin with the tests */

test("returns Hello, Name", () => {
  expect(greet("Bobo")).toEqual("Hello, Bobo.");
  // Arrange
  // Act
  // Assert
});
test("returns Hello, my friend", () => {
  expect(greet(null)).toEqual("Hello, my friend.");
  expect(greet("")).toEqual("Hello, my friend.");
});
test("greets all friends", () => {
  expect(greet(["Jill", "Jane"])).toEqual("Hello, my friend.");
  expect(greet("")).toEqual("Hello, Jill and Jane.");
});
