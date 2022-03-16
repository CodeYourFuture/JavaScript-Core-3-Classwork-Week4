/* Do not change this file */

const getWordLengths = require("./get-word-lengths");

test("Returns the word lengths", () => {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];
  const result = getWordLengths(words)
  expect(result).toEqual(expected);
});
