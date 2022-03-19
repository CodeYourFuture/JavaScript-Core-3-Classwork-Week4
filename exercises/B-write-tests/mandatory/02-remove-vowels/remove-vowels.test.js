const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  const word = "Samuel";
  const expected = "sml"
  // Act
  const testString = removeVowels(word);
  // Assert
  expect(testString).toEqual(expected);
});
