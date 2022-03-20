const greet = require("./index");

describe("requirement one", () => {
  test("if name is Bob, return Hello, Bob", () => {
    const name = "Bob";
    const result = greet(name);
    const Output = `Hello, ${name}`;
    expect(result).toEqual(Output);
  });

  test("if name is Sobia, return Hello, Sobia", () => {
    const name = "Sobia";
    const result = greet(name);
    const Output = `Hello, ${name}`;
    expect(result).toEqual(Output);
  });
});

describe("Requirement3", () => {
  test("when name is JERRY then the method should return the string HELLO JERRY!", () => {
    const name = "JERRY";
    const result = greet(name);
    const Output = "HELLO JERRY!";
    expect(result).toEqual(Output);
  });

  test("when name is TOM then the method should return the string HELLO TOM!", () => {
    const name = "TOM";
    const result = greet(name);
    const Output = "HELLO TOM!";
    expect(result).toEqual(Output);
  });
});

describe("Requirement4", () => {
  test("name is an array of two names [JILL, Jane]=>Hello Jill and Jane", () => {
    const name = ["Jill", "Jane"];
    const result = greet(name);
    const Output = "Hello, Jill and Jane";
    expect(result).toEqual(Output);
  });

  test("name is an array of two names [Jack, BILL]=>Hello Jack and Bill", () => {
    const name = ["Jack", "Bill"];
    const result = greet(name);
    const Output = "Hello, Jack and Bill";
    expect(result).toEqual(Output);
  });
});

describe("Requirement5", () => {
  test("name is [Amy, Brian, Charlotte], then the method should return the string Hello, Amy, Brian, and Charlotte.", () => {
    const name = ["Amy", "Brian", "Charlotte"];
    const result = greet(name);
    const Output = "Hello, Amy, Brian and Charlotte";
    expect(result).toEqual(Output);
  });
});

module.exports = greet;
