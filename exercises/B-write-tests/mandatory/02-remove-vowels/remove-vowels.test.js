const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  let word = removeVowels("jasin");
  // Act
  const expected = "jsn"
  // Assert
  const output = removeVowels(word)
  expect(output).toEqual(expected);
  
});
