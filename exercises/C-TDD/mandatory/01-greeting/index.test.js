const greet = require("./index")

/* Remember to begin with the tests */

test("greet function returns expected output adding Hello as a prefix", () => {
    // Arrange
    let nameOfPerson = "Selchuk";
    let expected = "Hello, Selchuk.";
    // Act
    let result = greet(nameOfPerson);
    // Assert
    expect(result).toEqual(expected);
});

test("when name is `null`, then return the string Hello, my friend.", () => {
    let nameOfPerson = null;
    let expected = "Hello, my friend.";
    let result = greet(nameOfPerson);
    expect(result).toEqual(expected);
})

test("if name is all uppercase, then return the string HELLO, EXPECTEDNAME !", () => {
  let nameOfPerson = "SELCHUK";
  let expected = "HELLO SELCHUK!";
  let result = greet(nameOfPerson);
  expect(result).toEqual(expected);
});

test("if name is an array with two elements, then return the string Hello firstElement and secondElement", () => {
  let nameOfPerson = ["Selchuk", "Karakus"];
  let expected = "Hello, Selchuk and Karakus.";
  let result = greet(nameOfPerson);
  expect(result).toEqual(expected);
});

test("if name is an array with arbitry length, then return the string Hello firstElement, secondElement so on adding and before the last element", () => {
  let nameOfPerson = ["Amy", "Brian", "Charlotte"];
  let expected = "Hello, Amy, Brian, and Charlotte.";
  let result = greet(nameOfPerson);
  expect(result).toEqual(expected);
});
