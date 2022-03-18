const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  const names = `Alireza`;
  const expected = `Hello Alireza`;
  const output = greetPerson(names);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});
