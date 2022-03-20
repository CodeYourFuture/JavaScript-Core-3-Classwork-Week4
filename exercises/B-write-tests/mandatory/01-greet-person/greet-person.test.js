const greetPerson = require("./greet-person");
describe("requirement one", () => {
  test("return person's name prefixed with Hello", () => {
    const person = "Etza";
    const result = greetPerson(person);
    const expected = `Hello ${person}`;
    expect(result).toEqual(expected);
  });
});
