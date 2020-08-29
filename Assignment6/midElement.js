'use strict';
function getMiddle(list){

    let sum;
    let value;
    
    for(let i = 0; i < list.length; i++){

        if(list.length % 2 !== 0){
            let midIndex = (list.length-1)/2
            value = list[midIndex];
        }
        else{
            let firstMidIndex = (list.length/2) - 1;
            let secondMidIndex = list.length/2;
            sum = list[firstMidIndex] + list[secondMidIndex]
            let averege = sum/2;
            value = averege;

        }
    }
    return value;
}
console.log(getMiddle([17, 8, 9, 5, 20]));
console.log(getMiddle([12, 4, 8, 15, 17, 5, 20, 11]));
