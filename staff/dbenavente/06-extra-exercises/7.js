/*
encodeWord
Define a function called ​encodeWord​ that receives a string and return 
the codified version of that string replacing the following characters:
*/

function encodeWordPlus(string){
    string= string.replace('T',7)
    string= string.replace('A',4)
    string= string.replace('S',5)
    string= string.replace('O',0)
    return string
}

console.log(encodeWordPlus("TASOQWER"));