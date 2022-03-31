const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const person = "Dave";
  const expected = "Hello Dave";

  // Act
  const output = greetPerson(person);

  // Assert
  expect(output).toEqual(expected);
});
