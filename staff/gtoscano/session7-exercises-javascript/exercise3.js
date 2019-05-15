//Ejercicio3
//Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

var result = "";
function columnMultp (number){
    for (j=1; j<=10; j++){
        result += j*number + '\t';
    }
    return result;
}   

console.log(columnMultp(3));

