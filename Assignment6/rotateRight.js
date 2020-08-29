'use strict';
function rotateRight(list){
    
    for(let i= 0; i < list.length - 1; i++){

        let rotatToRight = list[list.length-1];
        list[list.length-1]= list[i];
        list[i] = rotatToRight;

    }
        
    return list;
}

console.log(rotateRight([1, 2, 3, 4, 5, 6, 7]));
