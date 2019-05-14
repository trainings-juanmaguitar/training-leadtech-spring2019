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
    for (i=23; i<500; i+=23){
           table+=i+ "\t"
           acc+=i     
      }
      table += "El resultado de la suma es "+acc 
    return table

}

// buenas prácticas 
// nombrar las funciones y variables de forma correcta y hacerlo lo más legible posible. 
// nombre de funciones siempre empezando en minúscula y camelCase
// sólo las funciones constructoras pueden empezar con mayúscula

function multiplesOf23(){
 var listMultiples23 = ""
 var sumMultiples23= 0
 var messageResult="";
    for (var i=23; i<500; i+=23){
        listMultiples23 += i + "\t"
        sumMultiples23 += i;
    }
    messageResult =  "List is "+listMultiples23+ " Sum is "+sumMultiples23
    return messageResult
}