/* 
Multiplications table 
Write a function that writes in the console the multiplication table (from 1 to 10)
*/

function numbersRange(x1, x2) {
    var resultado;
    if (x1> x2) { return -1; }
    for (x1; x1<= x2; x1++) {
        resultado += x1 + '\t';
    }
    return resultado;
}
/*
Multiplications table on demand
Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter
*/


function multiplicationTable() {
    var mTable = '\n';
    for (var i=1; i<=10; i++) {
        for (var j=1; j<=10; j++) {
            mTable += i*j + '\t';
         //console.log(i*j);
        }
        mTable +=  '\n'
    }
    return mTable
}

function multiplicationTable(num) {
    for (var i=1; i<=10; i++) {
        for (var j=1; j<=10; j++) {
         console.log(i*j*num);
        }
    }
}