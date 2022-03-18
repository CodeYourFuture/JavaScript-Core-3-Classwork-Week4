const removeVowels = require("./remove-vowels");

/* Complete the tests */

test("remove vowels from word", () => {
  // Arrange
  // Act
  // Assert

   expect(removeVowels("Smith")).toEqual("smth");
   expect(removeVowels("water")).toEqual("wtr");
   expect(removeVowels("1a2e3i4o5u")).toEqual("12345");
   expect(removeVowels("vwxyz")).toEqual("vwxyz");
   expect(removeVowels("ABCDEF")).toEqual("bcdf");

});
