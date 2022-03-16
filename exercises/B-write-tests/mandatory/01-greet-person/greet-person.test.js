const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const result = greetPerson("Etza")
  // Act
  const expected = "Hello Etza";
  // Assert
  expect(result).toEqual(expected)

});
