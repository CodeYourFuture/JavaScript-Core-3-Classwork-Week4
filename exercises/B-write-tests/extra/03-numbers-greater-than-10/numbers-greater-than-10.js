/* Do not change this file */

function numbersGreaterThan10(numbersArray) {
  const newArr = numbersArray.filter((number) => {
    return number > 10;
  });
  return newArr;
}

module.exports = numbersGreaterThan10;
