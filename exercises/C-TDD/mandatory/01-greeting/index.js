const greet = (name) => {
    if (Array.isArray(name) && name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`
    } else if (name === null) {
        return "Hello, my friend."
    } else if (name === name.toUpperCase()) {
        return `HELLO ${name}!`
    }
    
    return `Hello, ${name}.`
}

module.exports =  greet