/**
 * Tabla de multiplicaciones
 * Escribe una función que escriba en la consola la 
 * tabla de multiplicación (del 1 al 10).
 */
function multiplicaTable(){
    var multiplicaTable = '\n';
    for(var i=1; i<=10; i++){
        for(var j=1; j<=10; j++){
            multiplicaTable += i*j + '\t'
            console.log(multiplicaTable + '\n')
        }
        multiplicaTable += '\n'
    }
    return multiplicaTable
}