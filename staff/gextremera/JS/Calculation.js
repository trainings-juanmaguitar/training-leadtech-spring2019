/**
 * Escribe un programa que escriba en la consola todos los múltiplos de 23 menores que 500 
 * y al final escribe la suma de todos ellos.
 */


function multiplesOf23(){
    var listMultiplesOf23 = 0;
    var sumMultiplesOf23 = 0;
    for (var i = 23; i < 500; i++){
        if(i%23 === 0){
           listMultiplesOf23 += i + '\t';
           console.log(listMultiplesOf23);
           sumMultiplesOf23 += i;
           console.log(sumMultiplesOf23);
        }
    }    
}