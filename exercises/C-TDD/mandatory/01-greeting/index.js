const greet = (name) => {
  if (name === null) return "Hello, my friend.";
  // if (Array.isArray(name)) return `Hello, ${name.join(" and ")}`;    // requirement 4
  if (Array.isArray(name)) {
    return name.reduce((previous, current, currentIndex) => {
      if (name.length - 1 === currentIndex) {
        return `${previous} and ${current}`;
      }
      return `${previous}, ${current}`;
    }, "Hello");
  }
  if (name === name.toUpperCase()) return `HELLO ${name}!`;
  return `Hello, ${name}`;
};
module.exports = greet; // we always need to export
