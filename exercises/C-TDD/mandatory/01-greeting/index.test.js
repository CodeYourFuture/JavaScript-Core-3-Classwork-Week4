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
const expected = `Hello, ${name}`;
expect(result).toEqual(expected);
});

test("if name is Amarachi, return Hello, Amarachi", () => {
// Arrange
const name = "Amarachi";
// Act
const result = greet(name);
// Assert
const expected = `Hello, ${name}`;
expect(result).toEqual(expected);
});
});
//Requirement 2
//Handle `nulls` by introducing a stand-in. For example, when name is `null`, then the method should return the string `"Hello, my friend."`
//Handle `nulls` by introducing a stand-in. For example, when name is `null .

describe("Requirement2", () => {
  test("when name is `null`, then the method should return the string Hello, my friend.", () => {
    const name = null;
    const result = greet(name);
    const expected = "Hello, my friend.";
    expect(result).toEqual(expected);
  });
});
``;
//Requirement 3
//Handle shouting. When name is all uppercase, then the method should shout back to the user.
//For example, when `name` is `"JERRY"` then the method should return the string `"HELLO JERRY!"`
describe("Requirement3", () => {
  test("when name is JERRY then the method should return the string HELLO JERRY!", () => {
    const name = "JERRY";
    const result = greet(name);
    const expected = "HELLO JERRY!";
    expect(result).toEqual(expected);
  });
  test("when name is TOM then the method should return the string HELLO TOM!", () => {
    const name = "TOM";
    const result = greet(name);
    const expected = "HELLO TOM!";
    expect(result).toEqual(expected);
  });
});
//Requirement 4
//Handle two names of input. When `name` is an array of two names, then both names should be printed. 
//For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`
describe("Requirement 4", () =>{
  test(" if name is an array of two names [Jill, Jane] return Hello, Jill and Jane.", () => {
    //Arrange
    const name = ["Jill", "Jane"];
    // Act
    const result = greet(name);
    // Assert
    const expected = "Hello, Jill and Jane";
    expect(result).toEqual(expected);
  });

  test("name is an array of two any other names [Jack, Bill] return Hello, Jack and Bill.", () => {
    //Arrange
    const name = ["Jack", "Bill"];
    // Act
    const result = greet(name);
    // Assert
    const expected = "Hello, Jack and Bill";
    expect(result).toEqual(expected);
  });
})
//Handle an arbitrary number of `names` as input. When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian, and Charlotte."`
describe("Requirement5", () => {
  test("if name is [Amy, Brian, Charlotte], then the method should return the string Hello, Amy, Brian, and Charlotte.", () => {
    const name = ["Amy", "Brian", "Charlotte"];
    const result = greet(name);
    const expected = "Hello, Amy, Brian and Charlotte";
    expect(result).toEqual(expected);
  });
 });