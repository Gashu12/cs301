'use strict';
function titleCase(s){
    let titleWords = '';
    let splited = s.split(' ')
    for(let i = 0; i < splited.length; i++){
        let firstChar = splited[i].charAt(0)
        let restChars = splited[i].substr(1, splited[i].length-1)
            titleWords  += firstChar.toUpperCase() + restChars.toLowerCase() + ' ';
    }
    console.log(titleWords);

}
titleCase('strings and objects');

