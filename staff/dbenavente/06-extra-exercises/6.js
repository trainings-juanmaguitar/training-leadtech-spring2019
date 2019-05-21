/*
lean
Define a function called ​isBoolean​ that receives a value and 
return true if the value received is a boolean
*/

function isBoolean(boolean){
    if(typeof(boolean)==='boolean'){
        return true
    }else{
        return false
    }
}

console.log(isBoolean(3));
console.log(isBoolean("true"));
console.log(isBoolean(true));