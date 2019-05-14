//Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

var resultado = "";
function rango(x1, x2){
    if (x2 < x1) {return "-1"}

    for (var i=x1+1; i<=x2; i++){
        resultado += i + '\t' ;
    }
    return resultado;
}

var a = rango(40, 50);
console.log(a)