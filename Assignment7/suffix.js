'use strict';
function suFfix(str1, str2){

    let x = 0;
    let suffix = ' ';
    while(true){
        if(str1[str1.length - 1 - x] === str2[str2.length - 1 - x]){
            suffix = str1[str1.length - 1 - x] + suffix
            x++;
        }
        else {
            break;
        }

    }
    return suffix;
    

}

console.log(suFfix('studing', 'playing'));
