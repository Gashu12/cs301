let prompt = require('prompt-sync')();
let num = prompt('Enter a number: ');

let i = 1;
while(i <= num){
    console.log(i)
    i++;
}

/*
    input: Get the number from the user.
    processing: check the condition and increment by 1 until the user input is reached.
    output: Display the number from 1 to the number that the useres entered.

*/