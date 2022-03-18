const greet = require("./index");

/* Remember to begin with the tests */

test("", () => {
  const name = `Bob`;
  const expected = `Hello, Bob`;
  const output = greet(name);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});
test("", () => {
  const name = `nulls`;
  const expected = "Hello, my friend.";
  const output = greet(name);
  expect(output).toEqual(expected);
 
});
test("", () => {
  const name = `SAM`;
  const expected = "HELLO, SAM";
  const output = greet(name);
  expect(output).toEqual(expected);
 
});
test("", () => {
  const name = [`Ali`, `Lili`, `Mali`,`Sali`];
  const expected = "Hello, Ali, Lili, Mali and Sali.";
  const output = greet(name);
  expect(output).toEqual(expected);
});
