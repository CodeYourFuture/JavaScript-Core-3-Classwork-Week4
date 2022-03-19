const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const name = "Daniel";
  const expected = "Hello Daniel";
  // Act
  const output = greetPerson(name);
  // Assert
  expect(output).toEqual(expected);
});

test("return person's name prefixed with Hello", () => {
  // Arrange
  const name = "Ali";
  const expected = "Hello Ali";
  // Act
  const output = greetPerson(name);
  // Assert
  expect(output).toEqual(expected);
});

test("return person's name prefixed with Hello", () => {
  // Arrange
  const name = "Saman";
  const expected = "Hello Saman";
  // Act
  const output = greetPerson(name);
  // Assert
  expect(output).toEqual(expected);
});