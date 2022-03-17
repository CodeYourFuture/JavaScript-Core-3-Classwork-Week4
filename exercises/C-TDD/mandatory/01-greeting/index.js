const greet = (name) => { 
  if (name === null) {
    return "Hello, my friend."
  }

  if (Array.isArray(name)) {
    let names = name.join(", ");
    let index = names.lastIndexOf(",");
    names = names.substring(0, index) + " and" + names.substring(index + 1);
    return `Hello, ${names}.`;
  }

  if(name === name.toUpperCase()){
    return `HELLO ${name}!`
  }
  
  return `Hello, ${name}.`
}

module.exports = greet