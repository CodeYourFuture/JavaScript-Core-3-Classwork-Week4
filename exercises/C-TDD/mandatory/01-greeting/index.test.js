const greet = require("./index")

/* Remember to begin with the tests */

test("Single name should print out a greeting", () => {
    expect(greet('Bob')).toEqual('Hello, Bob.')
});

test("null value should print out a greeting", () => {
    expect(greet()).toEqual('Hello, my friend.')
});

test("Array with 1 name", () => {
    expect(greet(['Bob'])).toEqual('Hello, Bob.')
});

test("Array with 2 names", () => {
    expect(greet(['Bob', 'Sam'])).toEqual('Hello, Bob and Sam.')
});

test("Array with more than 2 names", () => {
    expect(greet(['Bob', 'Sam', 'Lily', 'Nat'])).toEqual('Hello, Bob, Sam, Lily and Nat.')
});