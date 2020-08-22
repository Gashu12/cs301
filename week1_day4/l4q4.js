let prompt = require('prompt-sync')();
let num = prompt('Enter a number: ');

let i = 1;
let sum = 0;
while(i <= num){
    if(i % 2 !== 0)
        sum += i;
        i++;
}
console.log(sum)
/*
    input: Get the number from the user.

    processing: set 0 to sum.
                check the whether it is not divisible by 2 without reminder and add to sum.
    output: Display sum.
*/