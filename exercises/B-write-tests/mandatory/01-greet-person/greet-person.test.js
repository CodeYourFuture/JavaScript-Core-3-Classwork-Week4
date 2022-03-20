const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  let person = "Etza";
  // Act
  let result = greetPerson(person);
  // Assert
  let expected = "Hello Etza";
  expect(result).toEqual(expected);
});
