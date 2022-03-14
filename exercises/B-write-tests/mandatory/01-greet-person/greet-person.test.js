const greetPerson = require("./greet-person");

/* Complete the tests */
describe("requirement one", () => {
  test("return person's name prefixed with Hello", () => {
    const person = "Amarachi";
    const result = greetPerson(person);
    const expected = `Hello ${person}`;

    expect(result).toEqual(expected);
  });
});
