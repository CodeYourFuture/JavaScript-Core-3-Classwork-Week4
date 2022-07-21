const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  expect(greetPerson('Alex')).toEqual('Hello Alex')
  // Act
  // Assert
});
