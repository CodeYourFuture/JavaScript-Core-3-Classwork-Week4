const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  // Act
  // Assert
  const input = "samuel";
  const output = removeVowels(input);
  const expected = `sml`;
  expect(output).toEqual(expected);
});
