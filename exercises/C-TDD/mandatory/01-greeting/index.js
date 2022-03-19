const greet = (name) => {
    if(name === null){
        return "Hello, my friend.";
    }else{
        return "Hello " + name;
    } 
}
module.exports = greet;
