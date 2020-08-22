/*let prompt = require('prompt-sync')();


let number;
let count = 0;
do{
    number = prompt('Enter an integer number: ');
    count++;
    console.log(count);

}while(number != 6);
*/

let prompt = require('prompt-sync')();

let massage = ("i am thinking of a number between 1 and 100.\n" + 
                "Try to guess it!\n" + 
                "please enter a number between 1 and 100. ");
let answer = 38;
let guess;
let count = 0;
do{
    guess = parseInt(prompt(massage));
    if(guess < answer){
        massage = guess + " is too low. Please enter another integer."
    }
    else if(guess > answer){
        massage = guess + " is too hige. Please enter another intiger"
    }
    count++;
    

}while(guess != answer)
massage = guess + " is correct! the number of guess is: " + count;
console.log(massage);