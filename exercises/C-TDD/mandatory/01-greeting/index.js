  const greet = (name) => {
        if (name === null) {
            return "Hello, my friend."
        }
        else if (Array.isArray(name) && name.length > 1) {
        let value = "Hello";

        for (let i = 0; i < name.length - 1; i++) {
        value += `, ${name[i]}`;
        }
        value += ` and ${name[name.length - 1]}.`;
        return value;
        }
        else if (name == name.toUpperCase()) {
            return `HELLO ${name}!`
        }
        return `Hello, ${name}.`

    }

    module.exports = greet

 