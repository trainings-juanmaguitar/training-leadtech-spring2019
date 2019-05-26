// crear una funcion que devuelva el valor de cuantas veces se ha ejecutado
// howManytimes() <- 1
//how Manytimes() <- 2

function howManytimes (){
    var times =0;
     return function (){
        return  times+=1
       
     }
}


function howmanyTimes(){
    var times =0;
    return function() {
        return ++times
    }   
}

var howmany = howmanyTimes()
console.log(howmany()); 
console.log(howmany())
console.log(howmany())
console.log(howmany())
//


function setPassword(pass){
    var attemtp =0
    return function () {
        attemtp++
        if (attemtp <4 ){
            return "nº de intento " +attemtp +" la pass introducida es "+ pass
        } else {
           return "numero de intentos excedido"
        }         

    }
}

var password = setPassword ("12345")
password() 
password() 
password() 
password() 


// function del profe

function setPassword ( password){
    var numTries = 3
    return function () {
        if ( -- numTries){
            return "[" +numTries+ "]" +password
        } else {
            return "Maximo num de intentos alcanzado"
        }
    }
}
var password = setPassword("12345")

password()
