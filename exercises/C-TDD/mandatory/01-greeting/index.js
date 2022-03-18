const greet = (name) => {
  if (name === null) return `Hello, my friend.`;
  if (name instanceof Array && name.length > 2) {
    let print = "Hello";

    for (let i = 0; i < name.length - 1; i++) {
      print += name[i] === name.length - 1 ? `${name[i]}` : `, ${name[i]}`;
    }
    print += `, and ${name[name.length - 1]}.`;
    return print;
  }

  if (name instanceof Array) {
    return `Hello, ${name[0]} and ${name[1]}.`;
  }
  if (name.toUpperCase() === name) return `HELLO ${name}!`;
  return `Hello, ${name}.`;
};

module.exports = greet;
