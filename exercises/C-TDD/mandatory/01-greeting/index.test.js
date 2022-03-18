const greet = require("./index")

/* Remember to begin with the tests */

test("Test that it greets with hello", () => {
    // Arrange
      const result = greet("Bob");
    // Act
    let expectedOutput = "Hello, Bob";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test 2, that it greets with hello", () => {
    // Arrange
      const result = greet("Mary");
    // Act
    let expectedOutput = "Hello, Mary";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test when name is `null`, then the method should return the string `Hello, my friend.`", () => {
    // Arrange
      const result = greet(null);
    // Act
    let expectedOutput = "Hello, my friend.";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test all uppercase name, e.g. when `name` is `JERRY` return the string `HELLO JERRY!` ", () => {
    // Arrange
      const result = greet("JERRY");
    // Act
    let expectedOutput = "HELLO JERRY!";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test 2, all uppercase name, e.g. when `name` is `BOB` return the string `HELLO BOB!` ", () => {
    // Arrange
      const result = greet("BOB");
    // Act
    let expectedOutput = "HELLO BOB!";
    // Assert 
    expect(result).toEqual(expectedOutput)
});


test("Test empty array [], return the string `Hello, my friend.`", () => {
    // Arrange
      const result = greet([]);
    // Act
    let expectedOutput = "Hello, my friend.";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test an array of one name", () => {
    // Arrange
      const result = greet(["Mary"]);
    // Act
    let expectedOutput = "Hello, Mary";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test an array of two names e.g. `[Jill, Jane]`, then the method should return the string `Hello, Jill and Jane.`", () => {
    // Arrange
      const result = greet(["Jill", "Jane"]);
    // Act
    let expectedOutput = "Hello, Jill and Jane.";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test 2, an array of two names e.g. `[Tom, Jerry]`, then the method should return the string `Hello, Tom and Jerry.`", () => {
    // Arrange
      const result = greet(["Tom", "Jerry"]);
    // Act
    let expectedOutput = "Hello, Tom and Jerry.";
    // Assert 
    expect(result).toEqual(expectedOutput)
});

test("Test more than two names e.g. when `name` is `[Amy, Brian, Charlotte]`, return the string `Hello, Amy, Brian, and Charlotte.`", () => {
    // Arrange
      const result = greet(["Amy", "Brian", "Charlotte"]);

    // Act
    let expectedOutput = "Hello, Amy, Brian, and Charlotte.";
    // Assert 
    expect(result).toEqual(expectedOutput)
});


test("Test 2, more than two names: `[Albert, Bishop, Charles, David]`, return the string `Hello, Albert, Bishop, Charles, and David.`", () => {
    // Arrange
      const result = greet(["Albert", "Bishop", "Charles", "David"]);

    // Act
    let expectedOutput = "Hello, Albert, Bishop, Charles, and David.";
    // Assert 
    expect(result).toEqual(expectedOutput)
});