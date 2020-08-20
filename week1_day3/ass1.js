let prompt = require('prompt-sync')();
let num1 = prompt('Enter the first number: ');
let num2 = prompt('Enter the second number: ');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let dif = num2 - num1;

console.log(Math.abs(dif));

/* input: Get the first number
          Get the second number
   processing: Subtruct the first number from the second number to get the difference

   output: Display the absolut value of their difference
*/