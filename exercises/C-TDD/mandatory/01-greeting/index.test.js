const greet = require("./index");

/* Remember to begin with the tests */

// test("description of test", () => {
//   // Arrange
//   let parameterThatYouArePassingIntoTheFunction = value;
//   let expectedOutput = the result;

//   // Act
//   let functionCallVariable = function(parameterThatYouArePassingIntoTheFunction);

//   // Assert
//   expect(functionCallVariable).toEqual(expectedOutput);
// });

test("Write a method greet(name) that interpolates name in a simple greeting. For example, when name is Bob, the method should return a string Hello, Bob.", () => {
  // Arrange
  let name = "Bob";
  let expected = "Hello, Bob.";

  // Act
  let output = greet(name);

  // Assert
  expect(output).toEqual(expected);
});

test("Handle `nulls` by introducing a stand-in. For example, when name is `null`, then the method should return the string `Hello, my friend.`", () => {
  // Arrange
  let name = null;
  let expected = "Hello, my friend.";

  // Act
  let output = greet(name);

  // Assert
  expect(output).toEqual(expected);
});

test("Handle shouting. When name is all uppercase, then the method should shout back to the user. For example, when `name` is JERRY then the method should return the string HELLO JERRY!", () => {
  // Arrange
  let name = "JERRY";
  let expected = "HELLO JERRY!";

  // Act
  let output = greet(name);

  // Assert
  expect(output).toEqual(expected);
});

test("Handle two names of input. When `name` is an array of two names, then both names should be printed. For example, when `name` is [Jill, Jane], then the method should return the string `Hello, Jill and Jane.", () => {
  // Arrange
  let names = ["Jill", "Jane"];
  let expected = "Hello, Jill and Jane.";

  // Act
  let output = greet(names);

  // Assert
  expect(output).toEqual(expected);
});

test("Handle an arbitrary number of names as input. When name represents more than two names, separate them with commas and close with an Oxford comma and and. For example, when name is [Amy, Brian, Charlotte], then the method should return the string Hello, Amy, Brian, and Charlotte.", () => {
  // Arrange
  let names = ["Amy", "Brian", "Charlotte"];
  let expected = "Hello, Amy, Brian and Charlotte.";

  // Act
  let output = greet(names);

  // Assert
  expect(output).toEqual(expected);
});
