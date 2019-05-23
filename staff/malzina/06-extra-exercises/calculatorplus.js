/*
Calculator Plus
Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) 
returns the result of the operation applied to the values passed as parameters
*/

function calculador(operation,...aNumbers) {
    var result;
    aNumbers.forEach(function(number) {
        switch(operation) {
            case "suma":
                result += number;
                break;
            case "resta":
                result -= number;
                break;
            case "multiplicacion":
                result *= number;
                break;
            case "division":
                result /= number;
                break;
        }
    });
    return result;
}