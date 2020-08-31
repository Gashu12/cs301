'use strict'
const prompt = require('prompt-sync')();
const string1 = prompt('Please enter the first string: ');
const string2 = prompt('please enter another string which have the same sufix with the first string: ')
function preFix(string1, string2){
    let prefix = '';
    for(let i = 0; i <= string1.length; i++){

        for(let j = 0; j <= string2.length; j++){
            if(i === j && string1.charAt(i) === string2.charAt(j))
            prefix = string1.substr(0, i+1);
        }
        
    }
    console.log(prefix)

}

preFix(string1, string2);