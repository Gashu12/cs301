'use strict';
const prompt = require('prompt-sync')();
let number = prompt('please ente a number from 1 to 12: ');
number = parseInt(number);

function myChristMassDayGifts(number){
  
  let myDayOfChristMass = ['first', 'second', 'third', 'fourth', 'fifith', 'sixth', 'seventh', 
  'eiteth', 'nineth', 'tenth', 'eleventh', 'twelveth'];

  let myGiftsongs = ['a partridge in a pear tree', ' two turtle doves', ' three french hens', 
  'four calling birds', ' five golden rings', ' six geese a laying', ' seven swans a swimming', 
  ' eight maids a milking', ' nine ladies dancing', ' ten lords a leaping', 
  ' eleven pipers piping', ' twelve drummers drumming'];
  
  let myDayString = [];

  for(let i = 0; i < myGiftsongs.length; i++){
    if(number === (i+1))
    myDayString[number] = myDayOfChristMass[i];

  }
  let numberOfGifts = myGiftsongs.slice(1, number);
  numberOfGifts.reverse();
  
    if(number === 1){
    console.log('on my ' + myDayString.pop() + 'day of christmass my true love gave to me: ' + myGiftsongs[0])
    }
    else{
    console.log('on my ' + myDayString.pop() + 'day of christmass my true love gave to me:\n ' + numberOfGifts 
    + ', \nand ' + myGiftsongs[0])
    }

}

myChristMassDayGifts(number);
