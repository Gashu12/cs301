'use strict';
function addEnds(arr){
    
    let firstArray = arr[0];
    let lastArray = arr[arr.length-1];
    let sum;
    for(let i = 0; i < arr.length; i++){
        sum = firstArray + lastArray;
    }
    return sum;
}

console.log(addEnds([-1, 2, 3, 5, 9]));