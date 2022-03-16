const greetPerson = require("./greet-person");

test("return person's name prefixed with Hello", () => {
  expect(greetPerson("Daniel")).toEqual("Hello Daniel");
});
