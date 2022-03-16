const removeVowels = require("./remove-vowels");

test("remove vowels from word", () => {
  expect(removeVowels("Daniel")).toEqual("dnl");
});
