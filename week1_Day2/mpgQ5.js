let prompt = require('prompt-sync')();
let begReading = prompt('Enter begining reading milage: ');
let endReading = prompt('Enter ending reading milage: ');
let usedGasolline = prompt('Enter total gasolline used: ')
begining = parseFloat(begReading);
endReading = parseFloat(endReading);
usedGasolline = parseFloat(usedGasolline);
let totalMilage = endReading - begReading;
let milePerGallon = totalMilage / usedGasolline;
 console.log(milePerGallon)