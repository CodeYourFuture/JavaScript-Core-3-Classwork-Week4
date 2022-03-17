const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  const word = "samuel";
  // Act
  const expected = "sml";
  // Assert
  const result = removeVowels(word);
  expect(result).toEqual(expected);
});
