'use strict';
const prompt = require('prompt-sync')();
const fullName = prompt('Please enter your family name ande your given name separated by comma and with a single space: ')
function ectructGivenName(fullName){
let space = fullName.indexOf(' ');
let givenName = fullName.substring(space+1, fullName.length);

console.log(givenName);

}

ectructGivenName(fullName);
