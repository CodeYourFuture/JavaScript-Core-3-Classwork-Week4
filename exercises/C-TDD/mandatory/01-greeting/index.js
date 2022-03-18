const greet = (name) => {
    if (name === "Bob") {
      return 'Hello, ' + name;
    } else if (name === null) {
      return 'Hello, my friend';
    } else if (!Array.isArray(name) && name.toUpperCase()) {
      return "HELLO " + name + "!";
    } else if (Array.isArray(name)) {
        let names = name.join(", ");
        const searchTerm = ",";
        let lastIndex = names.lastIndexOf(searchTerm);
      return "Hello, " + names.substring(0, lastIndex) + " and" + names.substring(lastIndex + 1);
    } 
}

module.exports = greet;