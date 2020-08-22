
let a = 0, b = 1, c;
let f = '';

for(let i = 1; i <= 25; i++){

    c = a;
    a = a + b;
    b = c;
    f += b;
    if(i == 25)
        break;
    f += ', ';


}
console.log(f);

/*
    input: get the number 25.
    processing: add the consiquative numbers and put it in the next number until number of element equals 25.
    output: display all the elements.

*/