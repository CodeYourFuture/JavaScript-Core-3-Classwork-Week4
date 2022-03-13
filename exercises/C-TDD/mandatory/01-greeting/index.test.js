const greet = require("./index");

/* Remember to begin with the tests */

test("Returns greeting for name Samantha", () => {
  const name = "Samantha";
  const expectedGreeting = "Hello, Samantha";
  const result = greet(name);
  expect(result).toEqual(expectedGreeting)
});

test("handing situation when name is null", () => {
    const name = null;
    const expectedGreeting = "Hello, my friend";
    const result = greet(name);
    expect(result).toEqual(expectedGreeting);
})

test("turning greeting into shouting when name is all IN CAPITAL", () => {
  const name = "BOB";
  const expectedGreeting = "HELLO, BOB";
  const result = greet(name);
  expect(result).toEqual(expectedGreeting);
});

test("greeting multiple people if name is an array", () => {
  const name = ["Rita", "Anna"];
  const expectedGreeting = "Hello Rita and Anna";
  const result = greet(name);
  expect(result).toEqual(expectedGreeting);
});

test("greeting multiple people if name is an array", () => {
  const name = ["Rita", "Anna", "Ika"];
  const expectedGreeting = "Hello, Rita, Anna and Ika";
  const result = greet(name);
  expect(result).toEqual(expectedGreeting);
});
