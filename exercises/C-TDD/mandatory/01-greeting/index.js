const greet = (name) => {
  if (name == null) return `Hello, my friend.`;

  if (Array.isArray(name) && name.length > 1) {
    let output = "Hello";

    for (let i = 0; i < name.length - 1; i++) {
      output += `, ${name[i]}`;
    }
    output += ` and ${name[name.length - 1]}.`;
    return output;
  }
  if (name == name.toUpperCase()) return `HELLO ${name}!`;
  else return `Hello, ${name}.`;
};

module.exports = greet;
