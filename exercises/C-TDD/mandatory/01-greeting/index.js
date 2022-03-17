const greet = (name) => {
    
    // if(!name){
    //     return `Hello, my friend`;//
        
    // }if(name === name.toUpperCase()){
    //     return `HELLO, ${name.toUpperCase()}`; 
       
    // }  return `Hello, ${name}`; //Hello, Bob
    if(!name){
        return `Hello my friend`;
    }
    if(name === name.toUpperCase()){
        return `Hello ${name}`;
    }else
    {return `Hello, ${name}`;}
   
    
}

module.exports = greet;//accessible function for other files export