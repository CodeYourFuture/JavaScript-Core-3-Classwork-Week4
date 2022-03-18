const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  const word = `HelloAli`;
  const expected = `hlll`;
  const output = removeVowels(word);
  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});
