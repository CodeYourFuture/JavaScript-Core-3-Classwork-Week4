const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  const word = "Samuel";
  const result = removeVowels(word);
  expect(result).toEqual("sml")
  // Arrange
  // Act
  // Assert
});
