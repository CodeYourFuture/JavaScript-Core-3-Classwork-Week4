const greet = require("./index")

/* Remember to begin with the tests */

test("", () => {
    // Arrange
    let name = ''
    let result = "Hello, my friend.";
    // Act
    let execute =
      // Assert
      expect(greet(name)).toEqual(result);
});