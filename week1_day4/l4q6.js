let powerSeries = '';
let series;
for(let i = 0; i <= 31; i++){

    series = Math.pow(2, i);

    powerSeries += series;
    if(i === 31)
        break;
        powerSeries += ', ';
    
}
console.log(powerSeries);

/*
    input: Get number 2.
    processing: make it square from 0 to 31 inclusive.
    output: display the output.
*/
