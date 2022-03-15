const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  // Act
  // Assert
  const person = "Etza";
  const result = greetPerson(person);
  const expected = "Hello Etza";

  expect(result).toEqual(expected);
});
