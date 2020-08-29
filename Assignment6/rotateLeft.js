'use strict';
function rotateLeft(list){
    
    for(let i = 0; i < list.length-1; i++){

        let rotateToLeft = list[i];
        list[i] = list[i+1];
        list[i+1] = rotateToLeft;

    }
        
    return list;
}

console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7]))

