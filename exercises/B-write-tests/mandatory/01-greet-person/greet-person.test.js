const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  let greet = greetPerson("Saman");
  expect(greet).toEqual("Hello Saman");
  // Arrange
  // Act
  // Assert
});
