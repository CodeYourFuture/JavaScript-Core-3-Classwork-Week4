const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const name = "Etza";
  const expected = "Hello Etza";
  // Act
  const testString = greetPerson(name);
  // Assert
  expect(testString).toEqual(expected);
});
