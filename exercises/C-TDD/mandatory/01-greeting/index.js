const greet = (name) => {
  if (name) {
    if (Array.isArray(name) && name.length === 2) {
      return `Hello ${name[0]} and ${name[1]}`;
    } else {
      return isUpperCase(name);
    }
  } else {
    return "Hello, my friend.";
  }
};

const isUpperCase = (name, name2) => {
  if (name === name.toUpperCase()) {
    return `HELLO ${name}`;
  } else {
    return `Hello ${name}`;
  }
};

module.exports = greet;
