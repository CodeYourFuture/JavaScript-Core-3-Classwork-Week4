const greet = (name) => {
  return name instanceof Array
    ? (`Hello, ` + name.join(`, `)).replace(/,(?=[^,]*$)/, " and") + "."
    : name === `nulls`
    ? "Hello, my friend."
    : name === name.toUpperCase()
    ? `HELLO, ${name}`
    : `Hello, ${name}`;
};
module.exports = greet;
