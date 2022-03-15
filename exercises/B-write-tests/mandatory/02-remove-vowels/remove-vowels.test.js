const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  const result = removeVowels("samuel");

  expect(result).toEqual("sml");
});
