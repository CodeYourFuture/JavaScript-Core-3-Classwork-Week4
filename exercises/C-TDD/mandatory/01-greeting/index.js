const greet = (name) => {
  if (name === null) {
    return "Hello, my friend.";
  } else if (Array.isArray(name)) {
    if (name.length === 2) {
      return `Hello, ${name.join(" and ")}.`;
    } else {
      let lastName = name.splice(-1);
      return `Hello, ${name.join(", ")} and ${lastName}.`;
    }
  } else if (name === name.toUpperCase()) {
    return `HELLO ${name}!`;
  } else {
    return `Hello, ${name}.`;
  }
};

module.exports = greet;
