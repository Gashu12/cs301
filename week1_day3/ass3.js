let prompt = require('prompt-sync')();
let numberOfCredit = prompt('Enter the numbers of credit: ');

numberOfCredit = parseInt(numberOfCredit);
if(numberOfCredit < 30){
    console.log("freshman");
}
else if(numberOfCredit < 60){
    console.log("sophomere");
}
else if(numberOfCredit < 90){
    console.log("junior");
}
else {
    console.log("senior");
}

/* input: Get the number of credits
   processing: compare the number of credits no know the type of school year
   output: Display "freshman", "sophomere", "junior" or "senior" in accordance.
*/