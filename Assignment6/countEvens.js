'use strict';
function countEvens(list){
    
    let count = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEvens([4, 8, 9, 8, 20]));