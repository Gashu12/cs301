let prompt = require('prompt-sync')();

let age = prompt("Enter age: ");
let season = prompt("Enter season: ");

age = parseInt(age);

let bedTime;

if(age < 6){
    if(season == "summer" || season == "fall"){
        bedTime = "8:30 p.m.";
    }
    else if(season == "winter" || season == "spring"){
        bedTime = "8:00 p.m.";
    }
}
else if(age < 13){
    if(season == "summer"){
        bedTime = "9:30 p.m.";
    }
    else if(season == "winter" || season == "spring" || season == "fall"){
        bedTime = "8:30 p.m.";
    }
}
else if(age >= 13){
    if(season == "summer"){
        bedTime = "10:30 p.m.";
    }
    else if(season == "winter" || season == "spring" || season == "fall"){
        bedTime = "9:30 p.m.";
    }
}
console.log("Bed time is: " + bedTime);

/* input: Get age of aperson
   processing: compare the age and select the season to match the bed time hours.
   output: display the bed time.
*/