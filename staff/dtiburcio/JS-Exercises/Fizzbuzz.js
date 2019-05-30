//Versión con for

function FizzBuzz(){

    var arrayResult = []; 

    for (var i = 1; i <= 100; i++){
        if (i%15 === 0) arrayResult.push('FizzBuzz');
        else if (i%3 === 0) arrayResult.push('Fizz');
        else if (i%5 === 0) arrayResult.push('Buzz');
        else arrayResult.push(i);
    }

    return arrayResult;
}

//Segunda versión

let FizzBuzz = () => new Array(100)
    .fill(0)
    .map((number,i) =>{
            number = i+1
            if (number%15 === 0) return 'FizzBuzz'
            else if (number%3 === 0) return 'Fizz' 
            else if (number%5 === 0) return 'Buzz'
            else return number 
    }) 

console.log(FizzBuzz())