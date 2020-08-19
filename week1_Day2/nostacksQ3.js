let prompt = require('prompt-sync')();
let totalBoxs = prompt('Enter numbers of total boxes: ');
let boxesInStack = prompt('Enter numbers of boxes in stack: ');
totalBoxs = parseInt(totalBoxs);
boxesInStack =parseInt(boxesInStack);
let numberOfStack = totalBoxs / boxesInStack;

console.log(Math.ceil(numberOfStack));