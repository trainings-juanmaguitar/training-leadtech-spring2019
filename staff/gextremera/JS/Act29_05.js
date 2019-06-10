/**
 * TDD: es un modo de trabajo en el que empiezar escribiendo el test que tiene que validar el resultado 
 * de nuestro trabajo.
 */

let numberPinPong = () =>
    new Array(100)
    .fill(0)
    .map((e,i) =>{
        e= i+1
        if (e%15 === 0){return 'FizzBuzz'}
        else if (e%3 === 0){return 'Fizz'}
        else if (e%5 === 0){ return 'Buzz'}
        else {return e}	
    }) 



let fizzBuzz = () =>
    new Array(100)
    .fill(0)
    .map((e,i) =>{
        e= i+1
        if (e%15 === 0) return 'FizzBuzz'
        if (e%3 === 0) return 'Fizz'
        if (e%5 === 0) return 'Buzz'
        return e	
    }) 