//Calculation
//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function calculation(){
    var acc=0;
    var table=""
    for (i=0; i<500; i++){
        if (i%23 == 0){
            table+=i+ "\t"
           acc+=i
        } 
    }
    return table
    return acc       

}


function calculationRework(){
    var acc=0;
    var table=""
    for (i=0; i<500; i+=23){
           table+=i+ "\t"
           acc+=i     
      }
      table += "El resultado de la suma es "+acc 
    return table
         

}