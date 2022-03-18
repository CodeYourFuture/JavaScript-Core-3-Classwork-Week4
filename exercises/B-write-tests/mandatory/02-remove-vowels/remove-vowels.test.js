const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  expect(removeVowels("missippi")).toEqual('msspp')
});
test("remove vowels from word", () => {
  expect(removeVowels("japan")).toEqual('jpn')
});
