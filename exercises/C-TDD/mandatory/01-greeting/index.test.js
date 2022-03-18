const greet = require("./index")

/* Remember to begin with the tests */

test("return hello greeting with Bob", () => {
    // Arrange
    const expectedResult = "Hello, Bob";
    // Act
    const result = greet("Bob");
    // Assert
    expect(result).toEqual(expectedResult);
});

test("when name is null return greeting hello with string", () => {
  // Arrange
  const expectedResult = "Hello, my friend";
  // Act
  const result = greet(null);
  // Assert
  expect(result).toEqual(expectedResult);
});

test("when name is Jerry method returns greeting hello jerry", () => {
  // Arrange
  const expectedResult = "HELLO JERRY!";
  // Act
  const result = greet("JERRY");
  // Assert
  expect(result).toEqual(expectedResult);
});

test("when name is an array of two names, both should be printed with greeting", () => {
  // Arrange
  const expectedResult = "Hello, Jill and Jane";
  // Act
  const result = greet(["Jill", "Jane"]);
  // Assert
  expect(result).toEqual(expectedResult);
});

test("when name is an array of any length all names are returned", () => {
  // Arrange
  const expectedResult = "Hello, Jill, Jane and Bob";
  // Act
  const result = greet(["Jill", "Jane", "Bob"]);
  // Assert
  expect(result).toEqual(expectedResult);
});