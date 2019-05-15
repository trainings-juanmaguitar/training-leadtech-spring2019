/**
 * Rango de números enteros
 * Escriba una función en Javascript que tenga dos enteros 
 * x1 y x2 y devuelva todos los enteros entre ellos. 
 * Si x2 es menor de x1 lo que debería devolver -1
 */
var resultado;
function counter( x1, x2 ){
    if (x2 < x1){
        resultado = -1;
        console.log(resultado);
        return resultado;
    }
    for (var y = x1; y <= x2; y++){
        resultado = y;
        console.log(resultado);
        return resultado;
    }        
}
counter(3,1);
counter(10,20);

/**
 * Resultado JuanMa
 */
function integerBetween( x1, x2 ){
    var rangeBetween = ''
    if (x2 < x1){
        return -1
    }
    for (var i=x1; i<=x2; i++){
        rangeBetween += i + '\t'
    }
    return rangeBetween
}