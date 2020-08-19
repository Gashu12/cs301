let prompt = require('prompt-sync')();
let regHours = prompt('Enter regular hours: ');
let hourlyWage = prompt('Enter hourly wage: ');

regHours = parseFloat(regHours);
hourlyWage = parseFloat(hourlyWage);

let grossPay = regHours * hourlyWage;
let tax = grossPay * 0.15;

let netPay = grossPay - tax;

console.log(netPay)
