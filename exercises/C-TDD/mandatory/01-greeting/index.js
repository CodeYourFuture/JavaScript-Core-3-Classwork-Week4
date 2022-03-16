const greet = (name) => {
    
    if(!name){
        return `Hello, my friend`;//
        
    }if(name === name.toUpperCase()){
        return `HELLO, ${name.toUpperCase()}`; 
       
    }  return `Hello, ${name}`; //Hello, Bob
    
}

module.exports = greet;//accessible function for other files export