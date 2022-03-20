const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  let word = "samuel";
  // Act
  let expected = "sml";
  // Assert
  let result = removeVowels(word);
  expect(result).toEqual(expected);
});
