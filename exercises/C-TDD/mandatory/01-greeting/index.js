module.exports = greet = (name) => {

    if (!name) {
        return `Hello, my friend`
    } else if (!Array.isArray(name) && name === name.toUpperCase()) {
        return `HELLO ${name}!`
    } else if (Array.isArray(name) && name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`
    } else if (Array.isArray(name) && name.length > 2) {
        let result = "";
        let fixed = `and ${name[name.length-1]}`
        for (let i = 0; i <= name.length - 2; i++) {
            result += `${name[i]}, `;
        }
        return `Hello, ${result}${fixed}.`
    } else {
        return `Hello, ${name}!`

    }
}