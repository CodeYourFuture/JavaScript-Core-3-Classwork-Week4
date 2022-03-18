const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  let result = removeVowels("jasin");
  // Act
  const actualOutput = "jsn"
  // Assert
  expect(result).toEqual(actualOutput);
  
});
