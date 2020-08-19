let prompt = require('prompt-sync')();
let age = prompt('Enter age: ');
age = parseInt(age);

let heartBit = 220 - age;
let minHeartBit = 0.65*heartBit;
let maxHeartBit = 0.85*heartBit;

console.log(minHeartBit)
console.log(maxHeartBit)