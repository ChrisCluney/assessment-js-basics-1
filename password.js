const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the Password Validation tool')

reader.question("Welcome to password validator! Please enter your password:", function(input){
    if(input.length >= 10){
        console.log('Success!')
    } else {
            console.log('Failure')
    }

    reader.close()
})
    






