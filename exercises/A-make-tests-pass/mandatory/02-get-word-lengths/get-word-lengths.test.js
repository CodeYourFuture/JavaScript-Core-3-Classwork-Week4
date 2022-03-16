/* Do not change this file */

const getWordLengths = require("./get-word-lengths");

test("Returns the word lengths", () => {
  // Arrange
  const result = getWordLengths(words)
  //Act
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];
  //Assert
  expect(result).toEqual(expected);
});
