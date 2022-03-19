const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  const name = "Ali";
  expect(greetPerson(name)).toEqual("Hello Ali");
});