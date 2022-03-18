const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  const result = greetPerson('Etza');
  const expectResult = 'Hello Etza';
  expect(result).toEqual(expectResult);
});
