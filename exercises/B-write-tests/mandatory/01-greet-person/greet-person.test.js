const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  // Act
  // Assert
    // expect(output).toEqual(expected);

  expect(greetPerson("Smith")).toEqual("Hello Smith");
  expect(greetPerson("Norman")).toEqual("Hello Norman");
  
});
