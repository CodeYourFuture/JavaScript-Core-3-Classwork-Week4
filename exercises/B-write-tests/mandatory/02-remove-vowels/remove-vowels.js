/* Do not change this file */

function removeVowels(word) {
  const characters = word.toLowerCase().split("");

  const result = [];

  characters.forEach(function(character) {
    if (
      character !== "a" &&
      character !== "o" &&
      character !== "i" &&
      character !== "e" &&
      character !== "u"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input?

  const result = removeVowels('samuel');
*/
