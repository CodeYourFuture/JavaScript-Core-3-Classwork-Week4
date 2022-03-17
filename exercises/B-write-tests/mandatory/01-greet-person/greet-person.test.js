const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const person = "Matilda"
  // Act
  const expected = "Hello Matilda";
  const output = greetPerson(person);
  // Assert
  expect(output).toEqual(expected)
});
