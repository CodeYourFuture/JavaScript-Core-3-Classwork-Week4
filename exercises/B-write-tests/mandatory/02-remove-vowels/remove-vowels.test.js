const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  // Act
  // Assert
  let word ="Someone";
  let expected = "smn"
  let result = removeVowels(word);
  expect(result).toEqual(expected);
});
