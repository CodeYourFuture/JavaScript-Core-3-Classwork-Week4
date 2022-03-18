const greet = (name) => {
  let output = "";
  if (name === null) output = `Hello, my friend.`;
  else if (
    !Array.isArray(name) &&
    !name.split("").some((e) => e === e.toLowerCase())
  ) {
    output = `HELLO ${name}!`;
  } else if (Array.isArray(name) && name.length > 1 && name.length <= 2) {
    output = "Hello, " + name.join(" and ") + ".";
  } else if (Array.isArray(name) && name.length > 2) {
    output =
      "Hello, " +
      name.slice(0, 2).join(", ") +
      ", and " +
      name.splice(-1) +
      ".";
  } else if (!output) output = `Hello, ${name}.`;
  return output;
};

module.exports = greet;
