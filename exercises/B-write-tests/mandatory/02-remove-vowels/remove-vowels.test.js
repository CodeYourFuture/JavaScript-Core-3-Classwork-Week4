const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  const word = "renovation";
  // Act
  const expected = "rnvtn";
  const output = removeVowels(word);
  // Assert
  expect(output).toEqual(expected)
});
