const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  const personName = "Mahri";
  const expected = "Hello Mahri";
  // Act
  const outPut = greetPerson(personName);
  // Assert
  expect(outPut).toEqual(expected);
});
