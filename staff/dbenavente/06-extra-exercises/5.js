/*
isString
Define a function called ​isString​ that receives a value and return true 
if the value received is a string
*/

function isString(string){
    if(typeof(string)==='string'){
        return true
    }else{
        return false
    }
}

console.log(isString(3));
console.log(isString("3"));
console.log(isString("asass"));