const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {

  const person = "Etza";
  const result = greetPerson(person);
  expect(result).toEqual("Hello Etza");
  // Arrange
  // Act
  // Assert
});
