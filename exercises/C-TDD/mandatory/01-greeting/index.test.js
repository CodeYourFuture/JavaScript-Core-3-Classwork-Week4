const greet = require("./index")

/* Remember to begin with the tests */

test("reqirement 1", () => {
    expect(greet('Bob')).toEqual("Hello, Bob.")
    // Arrange
    // Act
    // Assert
});

test("reqirement 2", () => {
    expect(greet(null)).toEqual("Hello, my friend.")
    // Arrange
    // Act
    // Assert
});

test("reqirement 3", () => {
    expect(greet("JERRY")).toEqual("HELLO JERRY!")
    // Arrange
    // Act
    // Assert
});

test("reqirement 4", () => {
    expect(greet(["Jill", "Jane"])).toEqual("Hello, Jill and Jane.")
    // Arrange
    // Act
    // Assert
});