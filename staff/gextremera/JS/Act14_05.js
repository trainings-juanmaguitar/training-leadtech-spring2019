/**
 * Crea una función que devuelva el número de veces que se ha ejecutado.
 */

function getHowManyTimes(){
    var howManyTimes = 0;
    return function(){
        return ++howManyTimes; // devuelve howManyTimes +1
    }
}
var howManyTimes = getHowManyTimes();

/**
 * Dame una función que devuelva una contraseña máximo 3 veces
 */
var password = setPassword("12345");
password() // "[3] 12345"
password() // "[2] 12345"
password() // "[1] 12345"
password() // "Time Out"


function setPassword(pass){
    var counter = 0;
    var internPassword = pass;
    return function(){        
        counter ++;
        switch(counter){
            case 1:
                return "[3]" + internPassword;
                break;
            case 2:
                return "[2]"  + internPassword;
                break;
            case 3:
                return "[1]" + internPassword;
                break;
            default:
                return "Time Out";
                break;   
        }
    }
}

var password = setPassword("77889900");


/**
 * Solución JuanMa y Miquel
 */

function setPassword(pass) {
    var count = 3
    return function() {
        if(count > 0) {
            --count
            return pass
        } else {
            return "num max superado"
        }
    }
}

var password = setPassword("123456");


