for(let i = 1; i <= 12; i++){
    let row="";
    for(let j=1; j<= 12; j++){
        row += i*j + "\t";
    }
console.log(row);
}

/*
    input: get 12 rows from 1 to 12 and 12 columns from 1 to 12.
    processing: multiply the first column element by all the number in the row from 1 to 12.
    output: put the product aside the rows and columns. 
*/