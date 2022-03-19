const greet = require("./index.js")

/* Remember to begin with the tests */

//R1
test("should return the string Hello, my friend", () => {
    const name = "Bob";
    const expected = `Hello, ${name}!`;
    const result = greet(name);
    expect(result).toEqual(expected);
});

//R2
test("null should return Hello, my friend.", () => {
    const input = null;
    const expected = `Hello, my friend`;
    expect(greet(input)).toEqual(expected);

})
//R3
test("if name is uppercase", () => {
    const name = "JERRY";
    const expected = "HELLO JERRY!";
    const result = greet(name);
    expect(result).toEqual(expected);
});

//R4
test("if the name are just two names", () => {
    const name = ["Jill", "Jane"];
    const expected = "Hello, Jill and Jane.";
    const result = greet(name);
    expect(result).toEqual(expected);
});

test("if there are more than two names in array of name", () => {
    const name = ["Amy", "Brian", "Charlotte"];
    const expected = "Hello, Amy, Brian, and Charlotte.";
    const result = greet(name);
    expect(result).toEqual(expected);
});