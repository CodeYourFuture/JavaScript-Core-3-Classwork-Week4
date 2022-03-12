const greet = (name) => { 
    if(!name) return 'Hello, my friend.'
    if (Array.isArray(name)) {
        return name.reduce((a, cv, i) =>
            a += i === name.length - 1 && name.length > 1 ? ` and ${cv}` : `, ${cv}`
        , 'Hello') + '.'
    } else {
        return `Hello, ${name}.`;
    }
};

module.exports = greet;