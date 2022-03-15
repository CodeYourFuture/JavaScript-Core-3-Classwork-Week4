/* Do not change this file */

const findNeedle = require("./find-needle");

test("Find the needle", () => {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findNeedle(words, "needle");
  expect(output).toEqual(expected);
});

test("Find the plant", () => {
  const words = ["plant", "shelf", "arrow", "bird"];
  const expected = 0;

  const output = findNeedle(words, "plant");
  expect(output).toEqual(expected);
});
