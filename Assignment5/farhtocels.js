'use strict';
const prompt = require('prompt-sync')();

let farhaneit = prompt("Please enter temprature in degree fahrenite: ");

farhaneit = parseFloat(farhaneit);

function farhToCels(farhaneit){
  let celsious;
  celsious = (farhaneit - 32) * 5 /9;
  return celsious;
}

console.log(farhToCels(farhaneit));