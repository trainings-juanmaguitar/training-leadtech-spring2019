/**
 * Calculator
Define a function called calculator that receives an
operation and two numbers and returns the result of the operation applied to the values passed as parameters
 */

 function calculator(nNumber1, nNumber2, sOperation) {
   var nResult=0;
    switch (sOperation){
    case "suma":
    nResult = nNumber1+nNumber2
    break;
    case "resta":
    nResult = nNumber1-nNumber2
    break;

    case "multiplicacion":
    nResult = nNumber1*nNumber2
    break;

    case "division":
    nResult = nNumber1/nNumber2
    break;

    default:
    nResult= " No existe esta operación"
   }
   return nResult
 }