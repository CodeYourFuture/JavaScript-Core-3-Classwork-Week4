const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  // Act
  // Assert

  let result = removeVowels("Mike")
  expect(result).toEqual("mk")
});
