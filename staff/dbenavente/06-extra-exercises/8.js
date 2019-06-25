/*
encodeWordPlus
Improve the previous function to add a random number between 0 
and 1000 every 7 characters
*/

function encodeWordPlus(string){
    string= string.replace('T',7)
    string= string.replace('A',4)
    string= string.replace('S',5)
    string= string.replace('O',0)
    var newString = ''
    for(var i = 0; i<string.length;i++){
      var randomNumber = Math.floor(Math.random()*(1001))
      newString += string[i] + randomNumber
    }
    return newString
}

console.log(encodeWordPlus("TASOQWERQQWEFGHJHGFDSAAFHFJGFHNHNGCJSDFGHJKLKJHGFDSASDFGH"));