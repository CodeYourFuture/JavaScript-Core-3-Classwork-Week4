const greet = require("./index");

/* Remember to begin with the tests */

test("Single name should print out a greeting", () => {
    expect(greet('Bob')).toEqual('Hello, Bob.')
});

test("null value should print out a greeting", () => {
    expect(greet(null)).toEqual("Hello, my friend.")
});

test("When name is all uppercase", () => {
  expect(greet("JERRY")).toEqual("HELLO JERRY!");
});

test("Array with 2 names", () => {
    expect(greet(["Jill", "Jane"])).toEqual("Hello, Jill and Jane.")
});

test("Array with more than 2 names", () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toEqual("Hello, Amy, Brian and Charlotte.");
})