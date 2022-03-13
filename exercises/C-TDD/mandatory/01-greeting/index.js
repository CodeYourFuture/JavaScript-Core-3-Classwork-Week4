const greet = (name) => {
  if (typeof name === "string") {
    if (name === name.toUpperCase()) return "HELLO, " + name;
    else return "Hello, " + name;
  }
  if (typeof name === "object") {
    if (name === null) return "Hello, my friend";
    if (name.length > 2) {
      let greetingAll = "Hello";
      for (let i = 0; i < name.length - 1; i++) {
        greetingAll += ", " + name[i];
      }
      greetingAll += " and " + name[name.length - 1];
      return greetingAll;
    } else {
      let greetingAll = "Hello ";
      let nameStr = name.join(" and ");
      return greetingAll + nameStr;
    }
  }
};
module.exports = greet;
