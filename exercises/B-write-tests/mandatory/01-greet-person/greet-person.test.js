const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  // Act
  // Assert
  const input = "Etza";
  const expected = "Hello Etza";
  const output = greetPerson(input);
  expect(output).toEqual(expected);
});
test("return person's name prefixed with Hello", () => {
  // Arrange
  // Act
  // Assert
  const input = "Ali";
  const expected = "Hello Ali";
  const output = greetPerson(input);
  expect(output).toEqual(expected);
});
