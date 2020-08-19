let prompt = require('prompt-sync')();
let valueKilometers = prompt('Enter value in kilometers: ');
valueKilometers = parseFloat(valueKilometers);
let valueInMiles = valueKilometers / 1.609;
console.log(valueInMiles);