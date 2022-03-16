const greet = require("./index")

/* Remember to begin with the tests */

test("I should return Hello Name", () => {
    // Arrange
    // Act
    // Assert

    const result = greet("Bob")

    const expected = "Hello Bob";

    expect(result).toEqual(expected);
});


test("If name is null should return  Hello my friend", () => {

    const result = greet(null)

    const expected = "Hello my friend";

    expect(result).toEqual(expected);
})


test("If name is UPPERCASE should return  HELLO NAME", () => {

    const result = greet("BOB")

    const expected = "HELLO BOB";

    expect(result).toEqual(expected);
})

