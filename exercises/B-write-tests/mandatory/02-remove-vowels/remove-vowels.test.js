const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  const person = "samuel";
  const expected = "sml";

  const output = removeVowels(person);

  expect(output).toEqual(expected);
});
