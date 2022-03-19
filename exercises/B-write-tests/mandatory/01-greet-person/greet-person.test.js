const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  // Arrange
  // Act
  // Assert

  const item = "Sam"
  const output = greetPerson(item);
  const expected = "Hello Sam";
  

  expect(output).toEqual(expected);
});


// const greetPerson = require("./greet-person");

// test("return person's name prefixed with Hello", () => {
//   expect(greetPerson("Helen")).toEqual("Hello Helen");
// });

