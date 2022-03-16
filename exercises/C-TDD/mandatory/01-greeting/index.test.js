const greet = require("./index");

/* Remember to begin with the tests */

test("Write a method `greet(name)` that interpolates dvdsvbdsbsdbsdbs`name` in a simple greeting.", () => {
  expect(greet("Bob")).toEqual("Hello, Bob.");
});

test("Handle `nulls` by introducing a stand-in.", () => {
  expect(greet(null)).toEqual("Hello, my friend.");
});

test("When name is all uppercase", () => {
  expect(greet("JERRY")).toEqual("HELLO JERRY!");
});

//Handle two names of input. When `name` is an array of two names, then both names should be printed.
//For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`
test("Handle two names of input.", () => {
  expect(greet(["Jill", "Jane"])).toEqual("Hello, Jill and Jane.");
});
test("Handle an arbitrary number of `names` as input.", () => {
  expect(greet(["Amy", "Brian", "Charlotte"])).toEqual(
    "Hello, Amy, Brian, and Charlotte."
  );
});
