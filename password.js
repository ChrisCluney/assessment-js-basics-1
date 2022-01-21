const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to password validator! Please enter your password:", function(input)
{
    tokens = input.split(' ');

let password = `strawberry`

if (password.length >= 10){
    console.log(`Success`)
}else 
console.log(`Failure`)
    
    
    
    
    
    
    
    
    
    
    
    




})





