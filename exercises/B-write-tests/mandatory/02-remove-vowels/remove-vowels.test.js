const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  const result = removeVowels("hello")
  // Act
  const output = "hll"
  // Assert  
  expect(result).toEqual(output)
});
