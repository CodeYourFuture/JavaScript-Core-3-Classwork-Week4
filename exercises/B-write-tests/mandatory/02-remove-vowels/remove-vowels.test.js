const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  const word = "word";
  const expected = "wrd";
  // Act
  const output = removeVowels(word);
  // Assert
  expect(output).toEqual(expected);
});

test("remove vowels from word", () => {
  // Arrange
  const word = "friends";
  const expected = "frnds";
  // Act
  const output = removeVowels(word);
  // Assert
  expect(output).toEqual(expected);
});

test("remove vowels from word", () => {
  // Arrange
  const word = "hello";
  const expected = "hll";
  // Act
  const output = removeVowels(word);
  // Assert
  expect(output).toEqual(expected);
});