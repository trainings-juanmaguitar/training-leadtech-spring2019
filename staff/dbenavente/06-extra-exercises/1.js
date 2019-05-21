/*
Calculator
Define a function called calculator that receives an operation and two 
numbers and returns the result of the operation applied to the values passed as parameters
*/

function calculator(op,x,y){
    var result = 0
    switch(op){
        case 'suma':
        result = x + y
        break
        case 'resta':
        result = x - y
        break
        case 'multiplicacion':
        result = x * y
        break
        case 'division':
        if(y!=0){
            result = x / y
        }else{
            result = 'No se puede dividir entre 0'
        }
        break
    }
    return result
}

console.log(calculator("suma",10,5));
console.log(calculator("resta",10,5));
console.log(calculator("multiplicacion",10,5));
console.log(calculator("division",10,5));
console.log(calculator("division",10,0));