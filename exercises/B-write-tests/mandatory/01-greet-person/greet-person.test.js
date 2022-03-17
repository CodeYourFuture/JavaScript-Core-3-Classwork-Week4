const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  // Act
  // Assert
  let person = "Sam";
  let expected = "Hello Sam"
  let result = greetPerson(person);
  expect(result).toEqual(expected);
});

// test("return person's name prefixed with Hello", () => {
//   // Arrange
//   // Act
//   // Assert
//   let greeting = "Hello, my friend";
//   let result = greetPerson();
//   expect(result).toEqual(greeting);
// });