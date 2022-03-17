const greet = require("./index");
//Requirement 1
//Write a method `greet(name)` that interpolates `name` in a simple greeting.
//For example, when `name` is "Bob", the method should return a string `"Hello, Bob."`.
/* Remember to begin with the tests */
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

//Requirement 2
//Handle `nulls` by introducing a stand-in. For example, when name is `null`,
//then the method should return the string `"Hello, my friend."`
describe("Requirement 2", () => {
  test("if name is null => Hello, my friend. ", () => {
    // Arrange
    const name = null;
    // Act
    const result = greet(name);
    // Assert
    const expected = "Hello, my friend.";

    expect(result).toEqual(expected);
  });
});

//Requirement 3
//Handle shouting. When name is all uppercase, then the method should shout back to the user.
//For example, when `name` is `"JERRY"` then the method should return the string `"HELLO JERRY!"`

describe("Requirement 3", () => {
  test("if name is JERRY return HELLO JERRY!", () => {
    //Arrange
    const name = "JERRY";
    // Act
    const result = greet(name);
    // Assert
    const expected = "HELLO JERRY!";
    expect(result).toEqual(expected);
  });

  test("if name is MARY return HELLO MARY!", () => {
    //Arrange
    const name = "MARY";
    // Act
    const result = greet(name);
    // Assert
    const expected = "HELLO MARY!";
    expect(result).toEqual(expected);
  });
});

//Requirement 4
//Handle two names of input. When `name` is an array of two names, then both names should be printed.
//For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`
describe("Requirement 4", () => {
  test("if `name` is an array of two names [Jill, Jane] => Hello, Jill and Jane.", () => {
    //Arrange
    const name = ["Jill", "Jane"];
    // Act
    const result = greet(name);
    // Assert
    const expected = "Hello, Jill and Jane";
    expect(result).toEqual(expected);
  });

  test("if `name` is an array of two names [Jack, Bill] => Hello, Jack and Bill.", () => {
    //Arrange
    const name = ["Jack", "Jill"];
    // Act
    const result = greet(name);
    // Assert
    const expected = "Hello, Jack and Jill";
    expect(result).toEqual(expected);
  });
});

//Requirement 5
//Handle an arbitrary number of `names` as input.
//When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and".
//For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian, and Charlotte."`

describe("Requirement 5", () => {
  test("if name is [Amy, Brian, Charlotte] => Hello, Amy, Brian, and Charlotte.", () => {
    //Arrange
    const name = ["Amy", "Brian", "Charlotte"];
    //Act
    const result = greet(name);
    // Assert
    const expected = "Hello, Amy, Brian and Charlotte";
    expect(result).toEqual(expected);
  });
});
