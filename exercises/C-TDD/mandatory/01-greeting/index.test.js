const greet = require("./index")

/* Remember to begin with the tests */

test("requirement 1", () => {
    expect(greet('Bob')).toEqual("Hello, Bob.")
    // Arrange
    // Act
    // Assert
});

test("requirement 2", () => {
  expect(greet(null)).toEqual("Hello, my friend.")
  // Arrange
  // Act
  // Assert
});

test("requirement 3", () => {
  expect(greet("JERRY")).toEqual("HELLO JERRY!");
  // Arrange
  // Act
  // Assert
});

test("requirement 4", () => {
  const names = ["Jill", "Jane"];
  const expectedResult = "Hello, Jill and Jane.";
  const receivedResult = greet(names);
  expect(receivedResult).toEqual(expectedResult);
  // Arrange
  // Act
  // Assert
});

test("requirement 5", () => {
  const names = ["Amy", "Brian", "Charlotte"];
  const expectedResult = "Hello, Amy, Brian and Charlotte.";
  const receivedResult = greet(names);
  expect(receivedResult).toEqual(expectedResult);
  // Arrange
  // Act
  // Assert
});
