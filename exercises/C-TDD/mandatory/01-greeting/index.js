const greet = (name) => {
    
// Handle `nulls` by introducing a stand-in. For example, when name is `null`, then the method should return the string `"Hello, my friend."`    
    if (name === null)
         return "Hello, my friend.";

    if (Array.isArray(name)) {
           let theLength = name.length;
// Handle two names of input. When `name` is an array of two names, then both names should be printed. 
// For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`           
           if (theLength === 2) {
                  return `Hello, ${name[0]} and ${name[1]}.`; 
           }

           else if (theLength === 0) 
                  return "Hello, my friend."

           else if (theLength === 1)
                  return `Hello, ${name[0]}`; 
           

 // Handle an arbitrary number of `names` as input. 
 // When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and". 
 // For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian, and Charlotte."`          
           
           return (array=[...name], lastName = array.pop(), `Hello, ${array.join(", ")}, and ${lastName}.`); 
                            };
 
 // Handle shouting. When name is all uppercase, then the method should shout back to the user.
 // For example, when `name` is `"JERRY"` then the method should return the string `"HELLO JERRY!"`   
    if (name.toUpperCase() === name)
          return("HELLO " + name + "!");

 // Write a method `greet(name)` that interpolates `name` in a simple greeting. For example, when `name` is "Bob",
 // the method should return a string `"Hello, Bob."`.         
    return "Hello, " + name
}

module.exports = greet;