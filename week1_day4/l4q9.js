let prompt = require('prompt-sync')();
let number = prompt('Enter a number: ');

number = parseInt(number);

for(let i = 1; i <= number; i++){
    let row = "";
    row += i + "\t";
    for(let j = 2; j < 3; j++){
        row += 2*i + "\t";
        for(let k = 3; k < 4; k++){
            row += 3*i + "\t";
            for(let l = 4; l < 5; l++){
                row += Math.pow(i, 2) + "\t";
                for(let m = 5; m < 6; m++){
                    row += Math.pow(i, 3) + "\t";
                }
            }
        }
    }
    console.log(row);
}

/*
    input: get a number from the user.
    processing: list the number from 1 to the given number.
                multiply by 2 each number from 1 to the given number.
                multiply by 3 each number from 1 to the given number.
                make it a square from 1 to the given number.
                make it a power of 3 each number from 1 to the given number.
    output: put it the results in five columns.
                

*/