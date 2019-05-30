/**
 * TDD: es un modo de trabajo en el que empiezar escribiendo el test que tiene que validar el resultado 
 * de nuestro trabajo.
 */

let numberPinPong = () =>
    new Array(100)
    .fill(0)
    .map((e,i) =>{
        e= i+1
        if (e%15 === 0){return 'PingPong'}
        else if (e%3 === 0){return 'Ping'}
        else if (e%5 === 0){ return 'Pong'}
        else {return e}	
    }) 