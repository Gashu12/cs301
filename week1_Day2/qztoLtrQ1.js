let prompt = require('prompt-sync')();
let quarts = prompt('Enter volume in quarts: ');
quarts = parseFloat(quarts);
let liters = quarts / 1.057;
console.log(liters)

