const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  // Act
  // Assert

const result = greetPerson("Etza");

  expect(result).toEqual("Hello Etza");
});