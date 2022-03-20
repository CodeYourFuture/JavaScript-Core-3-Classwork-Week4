const greet = require("./index")

/* Remember to begin with the tests */

test("Greeting to a person", () => {
    // Arrange 
    const person = "Ali";
    const result = "Hello Ali"
    expect(greet(person)).toEqual(result);
    // Act
    // Assert
});