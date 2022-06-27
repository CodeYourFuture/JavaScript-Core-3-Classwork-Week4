const greet = require("./index")

/* Remember to begin with the tests */

test("", () => {
    // Arrange
    // Act
    // Assert
    let input= `Bob`
    let output = greet(input)
    let expected = "Hello, Bob"
    expect(expected).toEqual(output)
});