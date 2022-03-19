const greet = require("./index")

/* Remember to begin with the tests */

test("Adds 'Hello' to a name passed as a parameter", () => {
    // Arrange
    const name = "Ellie";
    // Act
    const output = greet(name);    
    // Assert
    const expected= "Hello Ellie";
    expect(output).toEqual(expected);
});

test("Return 'Hello, my friend.' if the parameter is null" , () => {
    const nothing = null;
    const output = greet(nothing);
    const expected = "Hello, my friend."
    expect(output).toEqual(expected);
});