const greet = require("./index");//require to have access to js file

/* Remember to begin with the tests */

test("showing string with name inside", () => {
    // Arrange
    // Act
    // Assert

    let greeting = "Hello, Bob";
    let result = greet("Bob");
    expect(result).toEqual(greeting);
});

test("return person's name hello my friend", () => {
    // Arrange
    // Act
    // Assert
    let greeting = "Hello, my friend";
    let result = greet();
    expect(result).toEqual(greeting);
  });

  test("return person's name hello my friend to uppercase", () => {
    // Arrange
    // Act
    // Assert
    let name = "RAHWA";//parameter
    let output = "HELLO, RAHWA";
    let result = greet(name);//function from index.js
    expect(result).toEqual(output);// test strcuture
  });