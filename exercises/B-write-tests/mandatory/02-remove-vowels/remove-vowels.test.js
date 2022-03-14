const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  // Act
  // Assert
  const string1 = "Monitoring";
  const expected = "mntrng";

  const outPut = removeVowels(string1);
  expect(outPut).toEqual(expected);
});
