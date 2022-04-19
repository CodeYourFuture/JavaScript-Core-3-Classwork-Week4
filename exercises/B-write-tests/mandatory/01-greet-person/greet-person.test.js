const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const name = "Rita";
  const expected = "Hello Rita";
  // Act
  const output = greetPerson(name);
  // Assert
  expect(output).toEqual(expected);
});

test("return person's name prefixed with Hello", () => {
  // Arrange
  const name = "Bita";
  const expected = "Hello Bita";
  // Act
  const output = greetPerson(name);
  // Assert
  expect(output).toEqual(expected);
});

test("return person's name prefixed with Hello", () => {
  // Arrange
  const name = "Irina";
  const expected = "Hello Irina";
  // Act
  const output = greetPerson(name);
  // Assert
  expect(output).toEqual(expected);
});