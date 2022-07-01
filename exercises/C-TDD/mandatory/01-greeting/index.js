const greet = (name) => {
  if (name === null) {
    return "Hello, my friend";
  } else if (name.length > 2 && Array.isArray(name)) {
    let str = "Hello, ";
    for (let i = 0; i < name.length - 2; i++) {
      str += name[i] + ", ";
    }
    str += `${name[name.length - 2]}, and ${name[name.length - 1]}.`;
    return str;
  } else if (name.length === 2 && Array.isArray(name)) {
    return `Hello, ${name[0]} and ${name[1]}.`;
  } else if (name === name.toUpperCase()) {
    return `HELLO ${name}!`;
  } else {
    return `Hello,${name}`;
  }
};
module.exports = greet;
