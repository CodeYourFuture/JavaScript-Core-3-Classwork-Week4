const greet = require("./index");
/* Remember to begin with the tests */
//Requirement 1
//Write a method `greet(name)` that interpolates `name` in a simple greeting.
//For example, when `name` is "Bob", the method should return a string `"Hello, Bob."`.
describe("requirement one", () => {
  test("if name is Bob, return Hello, Bob", () => {
    // Arrange
    const name = "Bob";
    // Act
    const result = greet(name);
    // Assert
    const actualOutput = `Hello, ${name}`;
    expect(result).toEqual(actualOutput);
  });
  test("if name is Amarachi, return Hello, Amarachi", () => {
    // Arrange
    const name = "Amarachi";
    // Act
    const result = greet(name);
    // Assert
    const actualOutput = `Hello, ${name}`;
    expect(result).toEqual(actualOutput);
  });
});
//Requirement 2
//Handle `nulls` by introducing a stand-in. For example, when name is `null`, then the method should return the string `"Hello, my friend."`
//Handle `nulls` by introducing a stand-in. For example, when name is `null
describe("Requirement3", () => {
  test("when name is JERRY then the method should return the string HELLO JERRY!", () => {
    const name = "JERRY";
    const result = greet(name);
    const actualOutput = "HELLO JERRY!";
    expect(result).toEqual(actualOutput);
  });
  test("when name is TOM then the method should return the string HELLO TOM!", () => {
    const name = "TOM";
    const result = greet(name);
    const actualOutput = "HELLO TOM!";
    expect(result).toEqual(actualOutput);
  });
});
describe("Requirement4", () => {
  test("name is an array of two names [JILL, Jane]=>Hello Jill and Jane", () => {
    const name = ["Jill", "Jane"];
    const result = greet(name);
    const actualOutput = "Hello, Jill and Jane";
    expect(result).toEqual(actualOutput);
  });
  test("name is an array of two names [Jack, BILL]=>Hello Jack and Bill", () => {
    const name = ["Jack", "Bill"];
    const result = greet(name);
    const actualOutput = "Hello, Jack and Bill";
    expect(result).toEqual(actualOutput);
  });
});
//Handle an arbitrary number of `names` as input. When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian, and Charlotte."`
describe("Requirement5", () => {
  test("name is [Amy, Brian, Charlotte], then the method should return the string Hello, Amy, Brian, and Charlotte.", () => {
    const name = ["Amy", "Brian", "Charlotte"];
    const result = greet(name);
    const actualOutput = "Hello, Amy, Brian and Charlotte";
    expect(result).toEqual(actualOutput);
  });
  //   test("name is an array of two names [Jack, BILL]=>Hello Jack and Bill", () => {
  //     const name = ["Jack", "Bill"];
  //     const result = greet(name);
  //     const actualOutput = "Hello, Jack and Bill";
  //     expect(result).toEqual(actualOutput);
  //   });
});
