const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  // Act
  // Assert
  let one = "Ali";
  let two = "ali";
  let three = "Rqbj";
  let four = "aeiouaie";
  let five = "aiteu";
  expect(removeVowels(one)).toEqual("l");
  expect(removeVowels(two)).toEqual("l");

  expect(removeVowels(three)).toEqual("rqbj");
  expect(removeVowels(four)).toEqual("");
  expect(removeVowels(five)).toEqual("t");

});