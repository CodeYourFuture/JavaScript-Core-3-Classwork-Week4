const removeVowels = require("./remove-vowels");

/* Complete the tests */
describe("requirement one", () => {
  test("remove vowels from word", () => {
    // Arrange
    const word = "Samuel";
    // Act
    const result = removeVowels(word);
    // Assert
    const expected = "sml";
    expect(result).toEqual(expected);
  });
});
