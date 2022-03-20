//Requirement 1
//Requirement 1 Write a method greet(name)
//For example, when `name` is "Bob"
// Remember to begin with the tests

const greet = require("./index");

describe("requirement 1", () => {
  test("if name is Bob => Hello, Bob", () => {
    // Arrange
    const name = "Bob";
    // Act
    const result = greet(name);
    // Assert
    const expected = `Hello, Bob`;
    expect(result).toEqual(expected);
  });
});
