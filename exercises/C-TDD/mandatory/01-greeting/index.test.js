const greet = require("./index")

/* Remember to begin with the tests */
describe("Requirement 1", () => {
    test("greet(bob) returns 'Hello, name.'", () => {
        // Arrange
        const name = "bob";
        // Act
        const result = greet(name);
        // Assert 
        const actualOutput = "Hello, bob.";

        expect(result).toEqual(actualOutput);
    });

    // test("greet(Ali) returns 'Hello, name.'", () => {
    //     // Arrange
    //     const name = "Ali";
    //     // Act
    //     const result = greet(name);
    //     // Assert 
    //     const actualOutput = "Hello, Ali.";

    //     expect(result).toEqual(actualOutput);
    // });
});
describe("Requirement 2", () => {
    test("greet(name) returns 'Hello, name.'", () => {
        // Arrange
        const name = null;
        // Act
        const result = greet(name);
        // Assert 

        const actualOutput = "Hello, my friend.";


        expect(result).toEqual(actualOutput);
    });
});
describe("Requirement 3", () => {
    test(`when name is JeRRY then the method should return the string HELLO JERRY!`, () => {
        const name = "JERRY";
        const result = greet(name);
        const actualOutput = "HELLO JERRY!";

        expect(result).toEqual(actualOutput);
    });
    // test(`when name is JERRY then the method should return the string HELLO JERRY!`, () => {
    //     const name = "TOM";
    //     const result = greet(name);
    //     const actualOutput = "HELLO TOM!";

    //     expect(result).toEqual(actualOutput);
    // });

});
describe("Requirement 4", () => {

    test(`when name is [Jill, Jane], then the method should return the string Hello, Jill and Jane.`, () => {
const name = ["Jill", "Jane"];
const result = greet(name);
const actualOutput = "Hello, Jill and Jane";

expect(result).toEqual(actualOutput);

    });
        test(`when name is [ALI, ELA], then the method should return the string Hello, ALI and ELA.`, () => {
            const name = ["ALI", "ELA"];
            const result = greet(name);
            const actualOutput = "Hello, ALI and ELA";

            expect(result).toEqual(actualOutput);

        });
});
describe("Requirement 5", () => {

    test(`when name is [Amy, Brian, Charlotte], then the method should return the string  Hello, Amy, Brian and Charlotte.`, () => {

  const name = ["Amy", "Brian", "Charlotte"];
  const result = greet(name);
  const actualOutput = "Hello, Amy, Brian and Charlotte";

  expect(result).toEqual(actualOutput);

    });
});