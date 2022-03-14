const greet = (name) => {
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}`;
  } else if (name === "null") {
    return "Hello, my friend.";
  } else {
    return "Hello, " + name;
  }
};

module.exports = greet;
