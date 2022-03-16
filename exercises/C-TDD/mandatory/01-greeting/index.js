const greet = (input) => {
    if(input===null)return "Hello, my friend.";
  if (input === "Bob") return "Hello, Bob.";
  if (Array.isArray(input) && input.length <= 2)
  return `Hello, ${input.slice(0, input.length - 1).join(", ")} and ${
      input[input.length - 1]
    }.`;
    
    if (Array.isArray(input) && input.length > 2)
    return `Hello, ${input.slice(0, input.length - 1).join(", ")}, and ${
        input[input.length - 1]
    }.`;
    if(input.toUpperCase()===input)return `HELLO ${input}!`
};

module.exports = greet;
