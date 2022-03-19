/* Do not change this file */

function greetPerson(person) {
  const greeting = "Hello ";

  return greeting + person;
}

const expected = "Hello Sam"
console.log("expected: " + expected)
console.log("got: " + greetPerson("Sam"))
console.log(expected == greetPerson("Alex") )

module.exports = greetPerson;

/*
  Let's trace this piece of code - what is the value of result with this input?

  const person = 'Etza';
  const result = greetPerson(person)
*/
