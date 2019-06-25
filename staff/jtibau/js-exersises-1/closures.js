//crear funcion que devuelva cuantas veces se ha ejecutado

function getHowManyTimes() {
    var howManyTimes = 0;
    return function() {
        return ++ howManyTimes;
    }
}
var howManyTimes = getHowManyTimes();

// crear funcion que devuelva un password solo las tres veces

function setPassword( password ){
    var count = 3;
    return function(){
        if( --count){
            return password
        }
        else{
            return 'maximo de intentos alcanzados'
        }
    }
}

var getPassword = setPassword('12345');

