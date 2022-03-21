const removeVowels = require("./remove-vowels");
describe("requirement one", () => {
  test("remove vowels from word", () => {
    const word = "Sobia";
    const result = removeVowels(word);
    const expected = "sb";
    expect(result).toEqual(expected);
  });
});
