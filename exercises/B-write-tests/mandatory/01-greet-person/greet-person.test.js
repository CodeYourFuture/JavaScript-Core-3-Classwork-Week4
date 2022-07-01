const greetPerson = require("./greet-person");

/* Complete the tests */

/*
  Let's trace this piece of code - what is the value of result with this input?

  const person = 'Etza';
  const result = greetPerson(person)
*/
test("say greeting to a person", () => {
  const person = "Etza";
  const expected = "Hello Etza";

  const output = greetPerson(person);

  expect(output).toEqual(expected);
});
