function greet(name) {
  if (name === null || name === "") {
    return "Hello, my friend.";
  } else if (name === name.toUppercase()) {
    return `HELLO, ${name}!`;
  } else if (Array.isArray(name)) {
    return `Hello, ${name[0]} and ${name[1]}.`;
  } else {
    return `Hello, ${name}.`;
  }
}

module.exports = greet;
