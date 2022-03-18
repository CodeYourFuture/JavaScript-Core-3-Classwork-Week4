const greetPerson = require("./greet-person.js");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  
 
  
  // Arrange - 
  let name = 'mohammad' // what we need inside the function 
  // Act - calling the funciton
  let greeting = greetPerson(name) // act is just calling the function
  // Assert - something to equal something 
  expect(greeting).toEqual(`Hello ${name}`) // should be expect not expected - assert is what is expected
});
