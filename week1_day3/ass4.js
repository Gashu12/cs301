let prompt = require('prompt-sync')();

let costOfHouse = prompt('Enter the cost of the house: ');
costOfHouse = parseFloat(costOfHouse);
let downPayment;
if(costOfHouse < 50000.00){
    downPayment = 0.05 * costOfHouse;
}
else if(costOfHouse < 100000.00){
    downPayment = 2000 + 0.1 * (costOfHouse - 50000.00);
}
else if(costOfHouse < 200000.00){
    downPayment = 7500 + 0.2 * (costOfHouse - 100000.00);
}
else {
    downPayment = 27500 + 0.25 * (costOfHouse - 200000.00);
}
console.log(downPayment);

/* input: Get the cost of the house
   processing: Determine the down payment according to the cost of the house.
   output: Display the down payment
*/