const removeVowels = require("./remove-vowels.js");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange 
  let word = 'Example'
  let anotherWord = 'xmpl'
  // Act
  let noVowels = removeVowels(word)
  // Assert
  expect(noVowels).toEqual(anotherWord)

});
