/**Multiplications table
Write a function that writes in the console the multiplication table (from 1 to 10) */

function multiplicationTable (){
    var num;
    var table="";
    for (i=1; i<=10;i++) {
        for (k=1; k<=10;k++){
            num = (i*k)
           table+=num + "\t";
        }
        table+="\n"
    }   
    return table  
}
