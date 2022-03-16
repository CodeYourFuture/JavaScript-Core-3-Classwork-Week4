const greet = (name) => {
    if(name === null)   return `Hello my friend`;
    if(name === name.toUpperCase()) return `HELLO ${name}`
    return `Hello ${name}`
}
module.exports = greet;