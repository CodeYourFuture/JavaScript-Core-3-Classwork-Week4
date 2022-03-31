const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  let word = "samuel";
  let expected = "sml";

  // Act
  let output = removeVowels(word);

  // Assert
  expect(output).toEqual(expected);
});
