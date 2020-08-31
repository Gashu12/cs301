'use strict';
function switchCase(s){
    let s1 = s.toLowerCase();
    let switchedString = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] === s1[i]){
            switchedString += s[i].toUpperCase()
        }
        else{
            switchedString += s1[i];
        }
    }

    console.log(switchedString)

}
switchCase('watch is gOOd 22');



