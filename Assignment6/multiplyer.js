'use strict';
function multiply(list, multiplyer){
    
    let newList = [];
    let product;
    for(let i = 0; i < list.length; i++){
        product = list[i] * multiplyer;
        newList.push(product)
    }
    return newList;
}

console.log(multiply([17, 8, 9, 5, 20], 5))