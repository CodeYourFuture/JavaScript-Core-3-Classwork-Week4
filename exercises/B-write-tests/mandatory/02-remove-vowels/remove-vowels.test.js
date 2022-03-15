const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  // Act
  // Assert
  const result = removeVowels("samuel");
  const expected = "sml";
  expect(result).toEqual(expected);
});
