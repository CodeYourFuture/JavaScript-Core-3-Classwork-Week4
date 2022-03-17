const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const person = "Etza";
  // Act
  const result = greetPerson(person);
  // Assert
  const expected = "Hello Etza";
  expect(result).toEqual(expected);
});
