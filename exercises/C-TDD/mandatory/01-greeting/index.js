const greet = (name) => {
    if(name === null || name === ''){
        return `Hello, my friend.`;
    } else {
        return `Hello, ${name}.`;
    }
}
module.exports = greet