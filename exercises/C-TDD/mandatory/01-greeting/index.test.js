const greet = require("./index");

/* Remember to begin with the tests */

test(`Greeting result for name such as "Hello, Ali." for "Ali"`, () => {
  const name1 = "Ali";
  const result1 = "Hello, Ali.";

  expect(greet(name1)).toEqual(result1);

  const name2 = "Saman";
  const result2 = "Hello, Saman.";

  expect(greet(name2)).toEqual(result2);

  const name4 = "Dona";
  const result4 = "Hello, Dona.";

  expect(greet(name4)).toEqual(result4);
});

test(`Greeting result for name is null return "Hello, my friend."`, () => {
  const name = null;
  const result = "Hello, my friend.";

  expect(greet(name)).toEqual(result);
});

test(`Greeting result for name iWhen name is all uppercase, then the method should shout back to the user. For example, when "name" is "JERRY" then the method should return the string "HELLO JERRY!"`, () => {
  const name = "MADI";
  const result = "HELLO MADI!";

  expect(greet(name)).toEqual(result);
});

test(`Greeting result for "name" is an array of two names, then both names should be printed. For example, when "name" is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."`, () => {
  const name = ["Mery", "Chris"];
  const result = "Hello, Mery and Chris.";

  expect(greet(name)).toEqual(result);
});

test(`Greeting result for "name" represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when "name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."`, () => {
  const name = ["Mery", "Chris", "Amy"];
  const result = "Hello, Mery, Chris, and Amy.";

  expect(greet(name)).toEqual(result);
});
