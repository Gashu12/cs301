let prompt = require('prompt-sync')();

let personStatus = prompt("Enter person's status: ");
let numOverDueBooks = prompt("Enter number of overdue books in the last year: ");

numOverDueBooks = parseFloat(numOverDueBooks);
let loanDurationWeeks;

if(personStatus == "student"){
    if(numOverDueBooks == 0){
        loanDurationWeeks = 6;
    }
    else if(numOverDueBooks < 3){
        loanDurationWeeks = 4;
    }
    else {
        loanDurationWeeks = 2;
    }
}
else if(personStatus == "faculty"){
        if(numOverDueBooks == 0){
        loanDurationWeeks = 16;
    }
    else if(numOverDueBooks < 3){
        loanDurationWeeks = 12;
    }
    else {
        loanDurationWeeks = 8;
    }
}
else if(personStatus == "other"){
        if(numOverDueBooks == 0){
         loanDurationWeeks = 4;
    }
    else if(numOverDueBooks < 3){
        loanDurationWeeks = 3;
    }
    else {
        loanDurationWeeks = 2;
    }
}
console.log("Loan duration weeks are: " + loanDurationWeeks);

/* input: Get person's status
          Get the number of overdue number of books in last year.
   processing: compare number of overdue books to find loan duration weeks
   output: display loan duration weeks.
*/