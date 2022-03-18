const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  const word = "Hello";
  const expected = "hll";
  // Act
  const output = removeVowels(word);
  // Assert
  expect(output).toEqual(expected);
});
